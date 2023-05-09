import { CustomTable } from '../../../../components/elements';
import { OperationDetails } from '../../types';

const tableSchema = [
  { id: 1, name: 'Operation ID', key: 'id', extra: null },
  { id: 2, name: 'Date', key: 'date', extra: null },
  { id: 3, name: 'Warehouse', key: 'warehouse_name', extra: null },
  { id: 4, name: 'Value', key: 'occupied_value', extra: null },
  { id: 5, name: 'Operation Type', key: 'operation_type_name', extra: null },
];

type OperationsTableProps = {
  tableData: OperationDetails[] | undefined;
};

export const OperationsTable = ({ tableData }: OperationsTableProps) => {
  if (!tableData) return <p>No data</p>;

  return <CustomTable elements={tableData} schema={tableSchema} pageRows={6} />;
};
