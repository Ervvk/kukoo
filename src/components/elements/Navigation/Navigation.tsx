import { Fragment, useState } from 'react';

import styles from './Navigation.module.scss';
import { NavigationItem, NavigationLink } from './NavigationItem';

const links = [
  {
    id: 1,
    label: 'Dashboard',
    url: '/',
  },
  { id: 2, label: 'Market', url: '/market' },
  { id: 3, label: 'Deliveries', url: '/deliveries' },
];

export const Navigation = () => {
  const [active, setActive] = useState(links[0].label);

  const navigationItems = links.map((link: NavigationLink) => (
    <Fragment key={link.id}>
      <NavigationItem
        link={link}
        isActive={active === link.label}
        onClick={() => {
          setActive(link.label);
        }}
      />
    </Fragment>
  ));

  return <nav className={styles['navigation']}>{navigationItems}</nav>;
};
