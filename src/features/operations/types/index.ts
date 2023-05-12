import { BaseEntity } from '../../../types';

export interface OperationMonthly {
  company_id: number;
  month: Date;
  occupied_value: number;
}

export interface OperationDetails extends BaseEntity {
  warehouse_id: number;
  warehouse_owner: number;
  warehouse_name: number;
  company_id: number;
  date: Date;
  occupied_value: number;
}

export interface NewOperationDetails {
  warehouse_id: number;
  company_id: number;
  value: number;
}

export const operationTypes = {
  delivery: '1',
  pickup: '2',
};

export type OperationType = keyof typeof operationTypes;
export type OperationTypeValue = (typeof operationTypes)[OperationType];
