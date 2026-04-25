import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ejhhiihgwkskggmdeedq.supabase.co'
const supabaseAnonKey = 'sb_publishable_Xw5fGupDxeSDSgCgzxjrrg_GOQ7udwr'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
