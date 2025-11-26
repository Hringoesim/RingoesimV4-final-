import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
}

// Helper function to determine from email
function getFromEmail() {
  const domain = Deno.env.get('RESEND_DOMAIN');
  if (domain) {
    return `send@${domain}`;
  }
  return 'onboarding@resend.dev'; // Default fallback
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Complete waitlist signup function called');
    
    // Parse request body
    const { email, country, type } = await req.json()
    console.log('Request data:', { email, country, type });

    // Validate required fields
    if (!email || !country) {
      console.error('Missing required fields:', { email: !!email, country: !!country });
      return new Response(
        JSON.stringify({ error: 'Email and country are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    console.log('Storing waitlist signup in database...');

    // Store in database
    const { data: dbData, error: dbError } = await supabase
      .from('waitlist_clean_2025_11_26_19_00')
      .insert([
        {
          email: email,
          country: country,
          signup_type: type || 'waitlist'
        }
      ])
      .select()

    if (dbError) {
      console.error('Database error:', dbError);
      if (dbError.code === '23505') { // Unique constraint violation
        return new Response(
          JSON.stringify({ error: 'Email already registered on waitlist' }),
          { 
            status: 409, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log('Database record created:', dbData);

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment');
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('Sending confirmation email to user...');

    // Send confirmation email to user
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: email,
        subject: 'Welcome to Ringo Waitlist! 🎉',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #f97316; font-size: 28px; margin: 0;">Welcome to Ringo!</h1>
              <p style="color: #6b7280; font-size: 16px; margin: 10px 0 0 0;">One Number. One Plan. Everywhere.</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f97316, #ec4899); padding: 30px; border-radius: 12px; color: white; text-align: center; margin-bottom: 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 24px;">You're on the waitlist! 🚀</h2>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">Thank you for joining our pilot program. We'll notify you as soon as Ringo is ready.</p>
            </div>
            
            <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">What happens next?</h3>
              <ul style="color: #6b7280; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>We'll keep you updated on our progress</li>
                <li>You'll get early access to our pilot program</li>
                <li>Special pricing for waitlist members</li>
                <li>First to know when we launch in ${country}</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-bottom: 25px;">
              <p style="color: #6b7280; margin: 0 0 15px 0;">Stay connected with us:</p>
              <a href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true" 
                 style="display: inline-block; background: #0077b5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Follow us on LinkedIn
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                Questions? Reply to this email or contact us at 
                <a href="mailto:info@ringoesim.com" style="color: #f97316;">info@ringoesim.com</a>
              </p>
            </div>
          </div>
        `,
        text: `Welcome to Ringo Waitlist!

Thank you for joining our pilot program. We'll notify you as soon as Ringo is ready.

What happens next?
- We'll keep you updated on our progress
- You'll get early access to our pilot program  
- Special pricing for waitlist members
- First to know when we launch in ${country}

Stay connected: https://www.linkedin.com/company/ringoesim/?viewAsMember=true

Questions? Contact us at info@ringoesim.com`
      })
    });

    if (!userEmailResponse.ok) {
      const errorText = await userEmailResponse.text();
      console.error('Failed to send user email:', userEmailResponse.status, errorText);
      // Don't throw error - database record was created successfully
    } else {
      const userEmailResult = await userEmailResponse.json();
      console.log('User email sent successfully:', userEmailResult.id);
    }

    // Send notification email to admin
    console.log('Sending notification email to admin...');
    
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: 'info@ringoesim.com',
        subject: `New Waitlist Signup: ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #374151; margin-bottom: 20px;">New Waitlist Signup</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Country:</strong> ${country}</p>
              <p style="margin: 0 0 10px 0;"><strong>Type:</strong> ${type || 'waitlist'}</p>
              <p style="margin: 0 0 10px 0;"><strong>Database ID:</strong> ${dbData[0]?.id}</p>
              <p style="margin: 0;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This is an automated notification from the Ringo waitlist system.
            </p>
          </div>
        `,
        text: `New Waitlist Signup

Email: ${email}
Country: ${country}
Type: ${type || 'waitlist'}
Database ID: ${dbData[0]?.id}
Timestamp: ${new Date().toISOString()}

This is an automated notification from the Ringo waitlist system.`
      })
    });

    if (!adminEmailResponse.ok) {
      const errorText = await adminEmailResponse.text();
      console.error('Failed to send admin email:', adminEmailResponse.status, errorText);
      // Don't throw error - database record was created successfully
    } else {
      const adminEmailResult = await adminEmailResponse.json();
      console.log('Admin email sent successfully:', adminEmailResult.id);
    }

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully joined waitlist',
        database_id: dbData[0]?.id
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Waitlist signup error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process waitlist signup',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})