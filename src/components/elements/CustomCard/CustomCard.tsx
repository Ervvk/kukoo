import { Card } from '@mantine/core';

import { ChildrenProps } from '../../../types';

import styles from './CustomCard.module.scss';

interface CustomCardProps extends ChildrenProps {
  title?: string;
}

export const CustomCard = ({ children, title }: CustomCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={styles['card']}>
      <div className={styles['card-header']}>
        {' '}
        <h2 className={styles['card-title']}>{title}</h2>
      </div>
      <Card.Section className={styles['card-content']}>{children}</Card.Section>
    </Card>
  );
};
