import { supabase, composeSupabaseData } from '../../../lib/supabase';
import { OperationMonthly } from '../types';

export const getOperationsMonthly = async (companyId: number) => {
  try {
    const companyResponse = await supabase
      .from('deliveries_monthly')
      .select(`*`)
      .eq('company_id', companyId)
      .order('month');
    const companyData = composeSupabaseData(companyResponse);
    if (companyData) return companyData as OperationMonthly[];
  } catch (error) {
    console.log('rejected error', error);
  }
};
