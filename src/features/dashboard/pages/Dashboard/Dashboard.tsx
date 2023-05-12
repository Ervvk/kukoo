import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TruckDelivery } from 'tabler-icons-react';

import { CustomCard } from '../../../../components/elements';
import { useAccount } from '../../../auth/stores/auth';
import { TotalCapacityDetails } from '../../../companies/components';
import { NewOperationCard, OperationsChart, OperationsTable } from '../../../operations/components';
import { WarehousesTable, WarehousesChart } from '../../../warehouses/components';
import useDashboard from '../../hooks/useDashboard';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const account = useAccount();
  const { companyWarehouses, operationsMonthly, companyOperations } = useDashboard(account);
  const [opened, { open: openModal, close }] = useDisclosure(false);

  return (
    <div className={styles['dashboard']}>
      <div className={styles['dashboard-header']}>
        <div className={styles['dashboard-header-icons']}>
          <Button leftIcon={<TruckDelivery />} onClick={openModal}>
            New Operation
          </Button>
        </div>
        <div className={styles['dashboard-header-icons']}></div>
      </div>
      <div className={styles['dashboard-content']}>
        <div className={styles['dashboard-content-row']}>
          <CustomCard title="Total occupied space">
            <TotalCapacityDetails />
          </CustomCard>
          <CustomCard title="Warehouses capacity">
            <WarehousesChart chartData={companyWarehouses} />
          </CustomCard>

          <CustomCard title="Operations by months">
            <OperationsChart chartData={operationsMonthly} />
          </CustomCard>
        </div>
        <div className={styles['dashboard-content-row']}>
          <CustomCard title="Warehouses">
            <WarehousesTable tableData={companyWarehouses} />
          </CustomCard>
          <CustomCard title="Operations">
            {' '}
            <OperationsTable tableData={companyOperations} />
          </CustomCard>
        </div>
      </div>
      <Modal opened={opened} onClose={close} title="New Operation">
        <NewOperationCard />
      </Modal>
    </div>
  );
};
