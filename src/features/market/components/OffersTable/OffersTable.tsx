import { CustomTable } from '../../../../components/elements';

//import styles from './OffersTable.module.scss';

const elements = [
  {
    warehouse_id: 6,
    warehouse_name: 'Warehouse X',
    warehouse_capacity: '2022-01-03',
    occupied_sum: 155,
    available_space: 35,
  },
  {
    warehouse_id: 7,
    warehouse_name: 'Warehouse X',
    warehouse_capacity: '2022-01-03',
    occupied_sum: 155,
    available_space: 55,
  },
  {
    warehouse_id: 8,
    warehouse_name: 'Warehouse Y',
    warehouse_capacity: '2022-01-03',
    occupied_sum: 200,
    available_space: 5,
  },
  {
    warehouse_id: 9,
    warehouse_name: 'Warehouse Z',
    warehouse_capacity: '2022-01-03',
    occupied_sum: 100,
    available_space: 35,
  },
];

const tableSchema = [
  { id: 1, name: 'Offer Id', key: 'id', extra: null },
  { id: 2, name: 'Status', key: 'warehouse_name', extra: null },
  { id: 3, name: 'Owner Company', key: 'occupied_sum', extra: null },
  { id: 4, name: 'Last Update', key: 'warehouse_capacity', extra: null },
  { id: 5, name: 'Available Space', key: 'available_space', extra: null },
];

export const OffersTable = () => {
  return <CustomTable elements={elements} schema={tableSchema} />;
};
