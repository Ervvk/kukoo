import { supabase, composeSupabaseData } from '../../../lib/supabase';
import { CompanyDetails } from '../types';

export const getCompanySummary = async (companyId: number) => {
  try {
    const companyResponse = await supabase
      .from('company_report')
      .select(`*`)
      .eq('company_id', companyId);
    const companyData = composeSupabaseData(companyResponse);
    if (companyData) return companyData[0] as CompanyDetails;
  } catch (error) {
    console.log('rejected error', error);
  }
};
