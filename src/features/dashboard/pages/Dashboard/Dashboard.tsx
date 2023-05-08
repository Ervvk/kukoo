import { Button } from '@mantine/core';
import { useEffect } from 'react';
import { TruckDelivery, ShoppingCart, FileDownload } from 'tabler-icons-react';

import { CustomCard } from '../../../../components/elements';
import { useAccount } from '../../../auth/stores/auth';
import { TotalCapacityDetails } from '../../../companies/components';
import { useFetchCompany } from '../../../companies/stores/company';
import { DeliveriesChart } from '../../../deliveries/components';
import { OffersTable } from '../../../market/components';
import { WarehousesTable, WarehousesChart } from '../../../warehouses/components';
import {
  useFetchCompanyWarehouses,
  useCompanyWarehouses,
} from '../../../warehouses/stores/warehouses';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const account = useAccount();
  const companyWarehouses = useCompanyWarehouses();
  const fetchCompany = useFetchCompany();
  const fetchWarehouses = useFetchCompanyWarehouses();

  useEffect(() => {
    if (account) {
      const { company_id } = account;
      fetchCompany(company_id);
      fetchWarehouses(company_id);
    }
  }, [account, fetchCompany, fetchWarehouses]);

  return (
    <div className={styles['dashboard']}>
      <div className={styles['dashboard-header']}>
        <div className={styles['dashboard-header-icons']}>
          <Button leftIcon={<TruckDelivery />}>New Delivery</Button>
          <Button leftIcon={<ShoppingCart />}>Trade Space</Button>
        </div>
        <div className={styles['dashboard-header-icons']}>
          <Button leftIcon={<FileDownload />}>Deliveries Report</Button>
        </div>
      </div>
      <div className={styles['dashboard-content']}>
        <div className={styles['dashboard-content-row']}>
          <CustomCard title="Total occupied space">
            <TotalCapacityDetails />
          </CustomCard>
          <CustomCard title="Warehouses capacity">
            <WarehousesChart chartData={companyWarehouses} />
          </CustomCard>
          <CustomCard title="Deliveries">
            <DeliveriesChart />
          </CustomCard>
        </div>
        <div className={styles['dashboard-content-row']}>
          <CustomCard title="Warehouses">
            <WarehousesTable />
          </CustomCard>
          <CustomCard title="Market">
            {' '}
            <OffersTable />
          </CustomCard>
        </div>
      </div>
    </div>
  );
};
