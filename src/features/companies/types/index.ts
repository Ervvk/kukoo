import { BaseEntity } from '../../../types';

export interface Company extends BaseEntity {
  name: string;
  location: string;
}
