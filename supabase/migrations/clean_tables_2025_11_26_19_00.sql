-- Clean waitlist table for Ringo eSIM signups
CREATE TABLE IF NOT EXISTS public.waitlist_clean_2025_11_26_19_00 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  country VARCHAR(100) NOT NULL,
  signup_type VARCHAR(50) DEFAULT 'waitlist',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.waitlist_clean_2025_11_26_19_00 ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can join waitlist)
CREATE POLICY "Anyone can join waitlist" ON public.waitlist_clean_2025_11_26_19_00
  FOR INSERT WITH CHECK (true);

-- Create policy for reading (authenticated users only)
CREATE POLICY "Authenticated users can view waitlist" ON public.waitlist_clean_2025_11_26_19_00
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_clean_email_2025_11_26_19_00 ON public.waitlist_clean_2025_11_26_19_00(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_clean_country_2025_11_26_19_00 ON public.waitlist_clean_2025_11_26_19_00(country);
CREATE INDEX IF NOT EXISTS idx_waitlist_clean_created_2025_11_26_19_00 ON public.waitlist_clean_2025_11_26_19_00(created_at);

-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions_2025_11_26_19_00 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  inquiry_type VARCHAR(100) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for contact submissions
ALTER TABLE public.contact_submissions_2025_11_26_19_00 ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can submit contact form)
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions_2025_11_26_19_00
  FOR INSERT WITH CHECK (true);

-- Create policy for reading (authenticated users only)
CREATE POLICY "Authenticated users can view contact submissions" ON public.contact_submissions_2025_11_26_19_00
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for contact submissions
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email_2025_11_26_19_00 ON public.contact_submissions_2025_11_26_19_00(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_2025_11_26_19_00 ON public.contact_submissions_2025_11_26_19_00(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_inquiry_type_2025_11_26_19_00 ON public.contact_submissions_2025_11_26_19_00(inquiry_type);