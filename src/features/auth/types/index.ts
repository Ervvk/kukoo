import { BaseEntity } from '../../../types';

export interface Account extends BaseEntity {
  code: string;
  companyId: number;
}
