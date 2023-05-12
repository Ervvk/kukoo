import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oozqlcxbyucjhnlcefij.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const composeSupabaseData = (response: any) => {
  try {
    const result = response?.data && response.data.length > 0 ? response.data : null;
    if (!result) throw new Error('Failed to fetch the data');
    return result;
  } catch (error) {
    console.error('rejected error', error);
  }
};

export const getCurrentDate = () => new Date().toISOString().toLocaleString();
