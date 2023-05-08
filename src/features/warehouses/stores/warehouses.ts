import { create } from 'zustand';

import { getCompanyWarehouses } from '../api/getCompanyWarehouses';
import { WarehouseDetails } from '../types';

interface WarehousesState {
  companyWarehouses: WarehouseDetails[] | undefined;
  fetchCompanyWarehouses: (companyId: number) => void;
}

export const useWarehousesStore = create<WarehousesState>()((set) => ({
  companyWarehouses: [],
  fetchCompanyWarehouses: async (companyId: number) => {
    const warehousesData = await getCompanyWarehouses(companyId);
    if (warehousesData) set({ companyWarehouses: warehousesData });
  },
}));

export const useCompanyWarehouses = () => useWarehousesStore((state) => state.companyWarehouses);
export const useFetchCompanyWarehouses = () =>
  useWarehousesStore((state) => state.fetchCompanyWarehouses);
