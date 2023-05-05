import { supabase, composeSupabaseData } from '../../../lib/supabase';

export const getAccount = async (code: string) => {
  try {
    const accountResponse = await supabase.from('accounts').select(`*`).eq('code', code);
    const accountData = composeSupabaseData(accountResponse);
    return accountData[0];
  } catch (error) {
    console.log('rejected error', error);
  }
};
