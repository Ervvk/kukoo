import { ReactNode } from 'react';

export interface BaseEntity {
  id: number;
}

export interface ChildrenProps {
  children?: ReactNode;
}

export interface Account extends BaseEntity {
  code: string;
  company_id: number;
}

export interface Company extends BaseEntity {
  name: string;
  location: string;
  account_balance: number;
}

export interface Delivery extends BaseEntity {
  warehouse_id: number;
  company_id: number;
  occupied_value: number;
  date: Date;
}

export interface Warehouse extends BaseEntity {
  company_id: number;
  name: string;
  capacity: number;
}

export interface Transaction extends BaseEntity {
  buyer_id: number;
  owner_id: number;
  date: Date;
  value: number;
}
