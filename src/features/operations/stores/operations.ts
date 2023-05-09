import { create } from 'zustand';

import { getOperationsDetails } from '../api/getOperationsDetails';
import { getOperationsMonthly } from '../api/getOperationsMonthly';
import { OperationMonthly, OperationDetails } from '../types';

interface WarehousesState {
  companyOperations: OperationDetails[] | undefined;
  OperationsByMonths: OperationMonthly[] | undefined;
  fetchCompanyOperations: (companyId: number) => void;
}

export const useOperationsStore = create<WarehousesState>()((set) => ({
  companyOperations: [],
  OperationsByMonths: [],
  fetchCompanyOperations: async (companyId: number) => {
    const OperationsDetails = await getOperationsDetails(companyId);
    const OperationsMonthly = await getOperationsMonthly(companyId);
    if (OperationsDetails && OperationsMonthly)
      set({ companyOperations: OperationsDetails, OperationsByMonths: OperationsMonthly });
  },
}));

export const useCompanyOperations = () => useOperationsStore((state) => state.companyOperations);
export const useOperationsByMonths = () => useOperationsStore((state) => state.OperationsByMonths);
export const useFetchOperations = () => useOperationsStore((state) => state.fetchCompanyOperations);
