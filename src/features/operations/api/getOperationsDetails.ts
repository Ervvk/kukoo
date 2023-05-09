import { supabase, composeSupabaseData } from '../../../lib/supabase';
import { OperationDetails } from '../types';

export const getOperationsDetails = async (companyId: number) => {
  try {
    const companyResponse = await supabase
      .from('deliveries_details')
      .select(`*`)
      .eq('company_id', companyId);
    const companyData = composeSupabaseData(companyResponse);
    if (companyData) return companyData as OperationDetails[];
  } catch (error) {
    console.log('rejected error', error);
  }
};
