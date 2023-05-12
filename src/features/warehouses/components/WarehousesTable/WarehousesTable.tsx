import { CustomTable } from '../../../../components/elements';
import { TotalCapacityWidget } from '../../../companies/components';
import { calculateOccupiedPercentage } from '../../../companies/utils';
import { WarehouseDetails } from '../../types';

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
  if (!tableData) return <p>No data</p>;

  const tableElements = tableData?.map((item) => ({
    ...item,
    extraValue: calculateOccupiedPercentage(
      item.capacity,
      item.occupied_sum + item.transactions_value
    ),
  }));

  //Add a column with a graph to the table schema
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
