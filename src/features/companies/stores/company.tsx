import { create } from 'zustand';

import { getCompanySummary } from '../api/company-summary';
import { CompanyReport } from '../types';

interface CompanyState {
  report: CompanyReport | null;
  fetchCompany: (companyId: number) => void;
}

export const useCompanyStore = create<CompanyState>()((set) => ({
  report: null,
  fetchCompany: async (companyId: number) => {
    const companySummary = await getCompanySummary(companyId);
    console.log(companySummary);
    if (companySummary) set({ report: companySummary });
  },
}));

export const useFetchCompany = () => useCompanyStore((state) => state.fetchCompany);
export const useCompanyReport = () => useCompanyStore((state) => state.report);
