import { CustomTable } from '../../../../components/elements';
import { TotalCapacityWidget } from '../../../companies/components';
import { calculateOccupiedPercentage } from '../../../companies/utils';
import { WarehouseDetails } from '../../types';
/*
const elements = [
  {
    warehouse_id: 6,
    warehouse_name: 'Warehouse X',
    warehouse_capacity: 230,
    occupied_sum: 155,
    extraValue: 93,
  },
  {
    warehouse_id: 7,
    warehouse_name: 'Warehouse X',
    warehouse_capacity: 250,
    occupied_sum: 155,
    extraValue: 71,
  },
  {
    warehouse_id: 8,
    warehouse_name: 'Warehouse Y',
    warehouse_capacity: 330,
    occupied_sum: 200,
    extraValue: 21,
  },
  {
    warehouse_id: 9,
    warehouse_name: 'Warehouse Z',
    warehouse_capacity: 230,
    occupied_sum: 100,
    extraValue: 8,
  },
];
*/
const tableSchema = [
  { id: 1, name: 'Name', key: 'warehouse_name', extra: null },
  { id: 2, name: 'Capacity', key: 'capacity', extra: null },
  { id: 3, name: 'Occupied', key: 'occupied_sum', extra: null },
  { id: 4, name: 'Rented Space', key: 'transactions_value', extra: null },
];

type WarehousesTableProps = {
  tableData: WarehouseDetails[] | undefined;
};

export const WarehousesTable = ({ tableData }: WarehousesTableProps) => {
  const tableElements = tableData.map((item) => ({
    ...item,
    extraValue: calculateOccupiedPercentage(
      item.capacity,
      item.occupied_sum + item.transactions_value
    ),
  }));

  const tableSchemaWithExtra = [
    ...tableSchema,
    {
      id: 5,
      name: 'Total occupied %',
      key: '',
      extra: (value: number) => (
        <TotalCapacityWidget size={70} thickness={8} textSize={'.7rem'} value={value} />
      ),
    },
  ];

  return <CustomTable elements={tableElements} schema={tableSchemaWithExtra} pageRows={4} />;
};
