import { supabase, composeSupabaseData } from '../../../lib/supabase';
import { WarehouseDetails } from '../types';

export const getCompanyWarehouses = async (companyId: number) => {
  try {
    const companyResponse = await supabase
      .from('warehouse_report')
      .select(`*`)
      .eq('company_id', companyId);
    const companyData = composeSupabaseData(companyResponse);
    if (companyData) return companyData as WarehouseDetails[];
  } catch (error) {
    console.log('rejected error', error);
  }
};
