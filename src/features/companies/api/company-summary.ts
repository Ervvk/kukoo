import { supabase, composeSupabaseData } from '../../../lib/supabase';
import { CompanyReport } from '../types';

export const getCompanySummary = async (companyId: number) => {
  try {
    const companyResponse = await supabase
      .from('companies_report')
      .select(`*`)
      .eq('company_id', companyId);
    const companyData = composeSupabaseData(companyResponse);
    if (companyData) return companyData[0] as CompanyReport;
  } catch (error) {
    console.log('rejected error', error);
  }
};
