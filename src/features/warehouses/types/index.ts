export interface WarehouseDetails {
  warehouse_id: number;
  company_id: number;
  warehouse_name: string;
  capacity: number;
  occupied_sum: number;
  transactions_value: number;
  free_space: number;
}
