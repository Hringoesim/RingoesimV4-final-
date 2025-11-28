import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
}

// Helper function to determine from email
function getFromEmail() {
  return 'Info <info@ringoesim.com>';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Complete contact form function called');

    // Parse request body
    const { fullName, email, inquiryType, subject, message, type } = await req.json()
    console.log('Request data:', { fullName, email, inquiryType, subject, type });

    // Validate required fields
    if (!fullName || !email || !inquiryType || !subject || !message) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
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

    console.log('Storing contact form submission in database...');

    // Store in database
    const { data: dbData, error: dbError } = await supabase
      .from('contact_submissions_2025_11_26_19_00')
      .insert([
        {
          full_name: fullName,
          email: email,
          inquiry_type: inquiryType,
          subject: subject,
          message: message
        }
      ])
      .select()

    if (dbError) {
      console.error('Database error:', dbError);
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

    console.log('Sending contact form email to admin...');

    // Map inquiry types to readable subjects
    const inquiryTypeLabels: Record<string, string> = {
      'investor': 'Investor Inquiry',
      'partnership': 'Partnership Inquiry',
      'question': 'General Question',
      'technical': 'Technical Support',
      'media': 'Media & Press',
      'other': 'Other Inquiry'
    };

    const emailSubject = inquiryTypeLabels[inquiryType] || `Inquiry: ${inquiryType}`;

    // Send contact form email to admin
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: 'hippolyte@ringoesim.com',
        subject: emailSubject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #374151; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${fullName}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 0 0 10px 0;"><strong>Database ID:</strong> ${dbData[0]?.id}</p>
              <p style="margin: 0;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            </div>
            
            <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 15px 0;">Message:</h3>
              <p style="color: #6b7280; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>Action Required:</strong> Please respond to ${email} within 24 hours.
              </p>
            </div>
          </div>
        `,
        text: `New Contact Form Submission

Name: ${fullName}
Email: ${email}
Inquiry Type: ${inquiryType}
Subject: ${subject}
Database ID: ${dbData[0]?.id}
Timestamp: ${new Date().toISOString()}

Message:
${message}

Action Required: Please respond to ${email} within 24 hours.`
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

    // Send auto-reply confirmation to user
    console.log('Sending auto-reply to user...');

    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: email,
        subject: 'Thank you for contacting Ringo!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #f97316; font-size: 28px; margin: 0;">Thank you, ${fullName}!</h1>
              <p style="color: #6b7280; font-size: 16px; margin: 10px 0 0 0;">We've received your message</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f97316, #ec4899); padding: 30px; border-radius: 12px; color: white; text-align: center; margin-bottom: 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 24px;">Message Received! 📧</h2>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">We'll get back to you within 24 hours.</p>
            </div>
            
            <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Your message summary:</h3>
              <p style="color: #6b7280; margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="color: #6b7280; margin: 0 0 10px 0;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
              <p style="color: #6b7280; margin: 0 0 10px 0;"><strong>Reference ID:</strong> ${dbData[0]?.id}</p>
              <p style="color: #6b7280; margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="text-align: center; margin-bottom: 25px;">
              <p style="color: #6b7280; margin: 0 0 15px 0;">While you wait, stay connected:</p>
              <a href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true" 
                 style="display: inline-block; background: #0077b5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Follow us on LinkedIn
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                Need immediate assistance? Contact us directly at 
                <a href="mailto:info@ringoesim.com" style="color: #f97316;">info@ringoesim.com</a>
              </p>
            </div>
          </div>
        `,
        text: `Thank you, ${fullName}!

We've received your message and will get back to you within 24 hours.

Your message summary:
Subject: ${subject}
Inquiry Type: ${inquiryType}
Reference ID: ${dbData[0]?.id}
Submitted: ${new Date().toLocaleString()}

Stay connected: https://www.linkedin.com/company/ringoesim/?viewAsMember=true

Need immediate assistance? Contact us at info@ringoesim.com`
      })
    });

    if (!userEmailResponse.ok) {
      const errorText = await userEmailResponse.text();
      console.error('Failed to send user auto-reply:', userEmailResponse.status, errorText);
      // Don't throw error - database record was created successfully
    } else {
      const userEmailResult = await userEmailResponse.json();
      console.log('User auto-reply sent successfully:', userEmailResult.id);
    }

    // Return success response with email status
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully',
        database_id: dbData[0]?.id,
        email_status: {
          admin_email: adminEmailResponse.ok ? 'sent' : 'failed',
          user_auto_reply: userEmailResponse.ok ? 'sent' : 'failed'
        }
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to process contact form',
        details: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})