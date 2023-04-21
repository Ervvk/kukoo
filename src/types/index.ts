import { ReactNode } from 'react';

export interface BaseEntity {
  id: number;
}

export interface ChildrenProps {
  children?: ReactNode;
}
