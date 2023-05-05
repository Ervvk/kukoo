import { Button } from '@mantine/core';
import { useEffect } from 'react';
import { TruckDelivery, ShoppingCart } from 'tabler-icons-react';

import { CustomCard } from '../../../../components/elements';
import { useAccount } from '../../../auth/stores/auth';
import { TotalCapacityDetails, WarehousesTable } from '../../../companies/components';
import { useFetchCompany } from '../../../companies/stores/company';
import { DeliveriesChart } from '../../../deliveries/components';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const account = useAccount();
  const fetchCompany = useFetchCompany();

  useEffect(() => {
    if (account) fetchCompany(account?.company_id);
  }, [account, fetchCompany]);

  return (
    <div className={styles['dashboard']}>
      <div className={styles['dashboard-header']}>
        <div className={styles['dashboard-header-icons']}>
          <Button leftIcon={<TruckDelivery />}>New Delivery</Button>
          <Button leftIcon={<ShoppingCart />} variant="light">
            Trade Space
          </Button>
        </div>
      </div>
      <div className={styles['dashboard-content']}>
        <CustomCard title="Total occupied space">
          <TotalCapacityDetails />
        </CustomCard>
        <CustomCard title="Deliveries">
          <DeliveriesChart />
        </CustomCard>
        <CustomCard title="Market">
          {' '}
          <WarehousesTable />
        </CustomCard>
        <CustomCard title="Warehouses">
          <WarehousesTable />
        </CustomCard>
      </div>
    </div>
  );
};
