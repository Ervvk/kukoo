import { supabase } from '../../../lib/supabase';

export const getAccount = async (code: string) => {
  try {
    const account = await supabase.from('accounts').select(`*`).eq('code', code);

    if (account?.data && account.data.length > 0) return account.data[0];
    else throw new Error('Wrong code!');
  } catch (error) {
    console.log('rejected error', error);
  }
};
