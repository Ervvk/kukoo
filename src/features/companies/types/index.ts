import { BaseEntity } from '../../../types';

export interface Company extends BaseEntity {
  name: string;
  location: string;
}

export interface CompanyReport {
  company_id: number;
  company_name: string;
  company_location: string;
  total_capacity: number;
  total_occupied: number;
  total_transactions_value: number;
}
