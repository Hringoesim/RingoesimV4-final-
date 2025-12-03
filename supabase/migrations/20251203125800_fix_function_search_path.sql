-- Fix Supabase Lint 0011: Function Search Path Mutable
-- These functions had a mutable search_path, which can be a security risk.
-- We explicitly set search_path = public to prevent search path hijacking.

ALTER FUNCTION public.get_waitlist_stats() SET search_path = public;
ALTER FUNCTION public.get_contact_stats() SET search_path = public;
