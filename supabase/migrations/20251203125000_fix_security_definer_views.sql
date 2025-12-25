-- Fix Supabase Lint 0010: Security Definer View
-- These views were flagged as SECURITY DEFINER, which bypasses RLS.
-- We explicitly set security_invoker = true to ensure they respect Row Level Security policies.

ALTER VIEW public.current_waitlist SET (security_invoker = true);
ALTER VIEW public.current_contact_submissions SET (security_invoker = true);
