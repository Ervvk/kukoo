import { Stack, NumberInput, Button, SegmentedControl, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { BuildingWarehouse } from 'tabler-icons-react';

import { notificationDetails } from '../../../../lib/mantine-notifications';
import { useAccount } from '../../../auth/stores/auth';
import useDashboard from '../../../dashboard/hooks/useDashboard';
import { useCompanyWarehouses } from '../../../warehouses/stores/warehouses';
import { WarehouseDetails } from '../../../warehouses/types';
import { createOperation } from '../../api/createOperation';
import { operationTypes, OperationTypeValue } from '../../types';

import styles from './NewOperation.module.scss';

export const NewOperationForm = () => {
  const account = useAccount();
  const { fetchAll } = useDashboard(account);
  const [operationType, setOperationType] = useState<OperationTypeValue>(operationTypes.delivery);
  const [selectedWarehouse, setSelectedWarehouse] = useState<WarehouseDetails | null>(null);
  const companyWarehouses = useCompanyWarehouses();

  const form = useForm({
    initialValues: {
      warehouse: '',
      operationSize: 0,
    },
    validate: {
      operationSize: (value: number) => (value > 0 ? null : 'The value must be greater than 0'),
    },
  });

  const handleSelectChange = (value: string) => {
    form.setFieldValue('warehouse', value);
    setSelectedWarehouse(JSON.parse(value));
  };

  const handleFormSubmit = () =>
    form.onSubmit(async (formValues) => {
      const { warehouse_id, company_id } = JSON.parse(formValues.warehouse);
      const correctResponse = await createOperation(operationType, {
        warehouse_id,
        company_id,
        value: formValues.operationSize,
      });

      if (correctResponse) {
        notifications.show(notificationDetails.success);
        fetchAll();
      } else {
        notifications.show(notificationDetails.error);
      }
    });

  const availableSpace = selectedWarehouse
    ? operationType === operationTypes.delivery
      ? selectedWarehouse.free_space
      : selectedWarehouse.occupied_sum
    : 0;

  return (
    <div>
      {companyWarehouses ? (
        <form onSubmit={handleFormSubmit()} className={styles['login-form']}>
          <Stack>
            <SegmentedControl
              value={operationType}
              onChange={setOperationType}
              data={[
                { value: operationTypes.delivery, label: 'Delivery' },
                { value: operationTypes.pickup, label: 'Pickup' },
              ]}
            />
            <Select
              label="Choose a warehouse"
              placeholder="Pick one"
              onChange={handleSelectChange}
              data={companyWarehouses.map((warehouse) => ({
                value: JSON.stringify(warehouse),
                label: warehouse.warehouse_name,
              }))}
            />
            {selectedWarehouse && (
              <>
                <div className={styles['warehouse-details']}>
                  <BuildingWarehouse />{' '}
                  <div>
                    {<b>{selectedWarehouse.warehouse_name}</b>}
                    <p>
                      Available:<b> {availableSpace} m3</b>
                    </p>
                  </div>
                </div>
                <NumberInput
                  defaultValue={0}
                  step={10}
                  max={availableSpace}
                  placeholder=""
                  label="Operation Size"
                  withAsterisk
                  {...form.getInputProps('operationSize')}
                />
                <Button type="submit">Submit</Button>{' '}
              </>
            )}
          </Stack>
        </form>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
