-- Clean up old waitlist table (keep data if exists)
-- First, migrate any existing data from old table to new table
INSERT INTO public.waitlist_clean_2025_11_26_19_00 (email, country, signup_type, created_at)
SELECT 
  email, 
  'Unknown' as country, -- Default country for old records
  'waitlist' as signup_type,
  created_at
FROM public.waitlist_2025_11_16_18_48
WHERE email NOT IN (
  SELECT email FROM public.waitlist_clean_2025_11_26_19_00
)
ON CONFLICT (email) DO NOTHING;

-- Create a view for easy access to current waitlist data
CREATE OR REPLACE VIEW public.current_waitlist AS
SELECT 
  id,
  email,
  country,
  signup_type,
  created_at,
  updated_at
FROM public.waitlist_clean_2025_11_26_19_00
ORDER BY created_at DESC;

-- Create a view for current contact submissions
CREATE OR REPLACE VIEW public.current_contact_submissions AS
SELECT 
  id,
  full_name,
  email,
  inquiry_type,
  subject,
  message,
  created_at,
  updated_at
FROM public.contact_submissions_2025_11_26_19_00
ORDER BY created_at DESC;

-- Grant access to views for authenticated users
GRANT SELECT ON public.current_waitlist TO authenticated;
GRANT SELECT ON public.current_contact_submissions TO authenticated;

-- Create RLS policies for views
ALTER VIEW public.current_waitlist SET (security_barrier = true);
ALTER VIEW public.current_contact_submissions SET (security_barrier = true);

-- Add helpful comments
COMMENT ON TABLE public.waitlist_clean_2025_11_26_19_00 IS 'Clean waitlist table for Ringo eSIM pilot program signups';
COMMENT ON TABLE public.contact_submissions_2025_11_26_19_00 IS 'Contact form submissions from Ringo website';
COMMENT ON VIEW public.current_waitlist IS 'Current view of waitlist signups ordered by most recent';
COMMENT ON VIEW public.current_contact_submissions IS 'Current view of contact form submissions ordered by most recent';

-- Create function to get waitlist statistics
CREATE OR REPLACE FUNCTION public.get_waitlist_stats()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total_signups', COUNT(*),
    'countries', COUNT(DISTINCT country),
    'recent_signups_24h', COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours'),
    'recent_signups_7d', COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days'),
    'top_countries', (
      SELECT json_agg(json_build_object('country', country, 'count', count))
      FROM (
        SELECT country, COUNT(*) as count
        FROM public.waitlist_clean_2025_11_26_19_00
        GROUP BY country
        ORDER BY count DESC
        LIMIT 10
      ) top_countries
    )
  )
  INTO result
  FROM public.waitlist_clean_2025_11_26_19_00;
  
  RETURN result;
END;
$$;

-- Create function to get contact form statistics
CREATE OR REPLACE FUNCTION public.get_contact_stats()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total_submissions', COUNT(*),
    'recent_submissions_24h', COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours'),
    'recent_submissions_7d', COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days'),
    'inquiry_types', (
      SELECT json_agg(json_build_object('type', inquiry_type, 'count', count))
      FROM (
        SELECT inquiry_type, COUNT(*) as count
        FROM public.contact_submissions_2025_11_26_19_00
        GROUP BY inquiry_type
        ORDER BY count DESC
      ) inquiry_breakdown
    )
  )
  INTO result
  FROM public.contact_submissions_2025_11_26_19_00;
  
  RETURN result;
END;
$$;

-- Grant execute permissions on functions to authenticated users
GRANT EXECUTE ON FUNCTION public.get_waitlist_stats() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_contact_stats() TO authenticated;