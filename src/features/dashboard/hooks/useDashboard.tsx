import { useCallback, useEffect } from 'react';

import { Account } from '../../../types';
import { useFetchCompany } from '../../companies/stores/company';
import {
  useCompanyOperations,
  useOperationsByMonths,
  useFetchOperations,
} from '../../operations/stores/operations';
import {
  useFetchCompanyWarehouses,
  useCompanyWarehouses,
} from '../../warehouses/stores/warehouses';

const useDashboard = (account: Account | null) => {
  const companyWarehouses = useCompanyWarehouses();
  const operationsMonthly = useOperationsByMonths();
  const companyOperations = useCompanyOperations();
  const fetchOperations = useFetchOperations();
  const fetchCompany = useFetchCompany();
  const fetchWarehouses = useFetchCompanyWarehouses();

  const fetchAll = useCallback(() => {
    if (!account) return;
    const { company_id } = account;
    fetchCompany(company_id);
    fetchWarehouses(company_id);
    fetchOperations(company_id);
  }, [fetchCompany, fetchWarehouses, fetchOperations, account]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { companyWarehouses, operationsMonthly, companyOperations, fetchAll };
};

export default useDashboard;
