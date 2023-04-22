import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oozqlcxbyucjhnlcefij.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
//const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9venFsY3hieXVjamhubGNlZmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMDMzNTksImV4cCI6MTk5NzU3OTM1OX0.IQ-TeAxzR592CujJ1qkwJhYqAKMR-s0qfywW7qVMS64';
export const supabase = createClient(supabaseUrl, supabaseKey);
