import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { BaseEntity } from '../../../types';

import styles from './Navigation.module.scss';

export interface NavigationLink extends BaseEntity {
  label: string;
  url: string;
}

type NavigationItemProps = {
  link: NavigationLink;
  onClick: () => void;
  isActive: boolean;
};

export const NavigationItem = ({ link, onClick, isActive }: NavigationItemProps) => {
  return (
    <Link
      to={link.url}
      key={link.label}
      className={`${styles.link} ${isActive && styles['active']}`}
      onClick={onClick}
    >
      <Text>{link.label}</Text>
    </Link>
  );
};
