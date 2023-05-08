import { create } from 'zustand';

import { getCompanySummary } from '../api/getCompany';
import { CompanyDetails } from '../types';

interface CompanyState {
  details: CompanyDetails | null;
  fetchCompany: (companyId: number) => void;
}

export const useCompanyStore = create<CompanyState>()((set) => ({
  details: null,
  fetchCompany: async (companyId: number) => {
    const companySummary = await getCompanySummary(companyId);
    if (companySummary) set({ details: companySummary });
  },
}));

export const useFetchCompany = () => useCompanyStore((state) => state.fetchCompany);
export const useCompanyDetails = () => useCompanyStore((state) => state.details);
