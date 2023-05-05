import { TotalCapacityWidget } from '..';
import { CustomTable } from '../../../../components/elements';

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

const tableSchema = [
  { id: 1, name: 'Code', key: 'warehouse_id', extra: null },
  { id: 2, name: 'Name', key: 'warehouse_name', extra: null },
  { id: 3, name: 'Occupied', key: 'occupied_sum', extra: null },
  { id: 4, name: 'Capacity', key: 'warehouse_capacity', extra: null },
];

export const WarehousesTable = () => {
  const tableSchemaWithExtra = [
    ...tableSchema,
    {
      id: 5,
      name: 'Visual',
      key: '',
      extra: (value: number) => (
        <TotalCapacityWidget size={70} thickness={8} textSize={'.7rem'} value={value} />
      ),
    },
  ];

  return <CustomTable elements={elements} schema={tableSchemaWithExtra} />;
};
