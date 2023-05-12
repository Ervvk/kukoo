import { Button, Avatar, Drawer, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { Logout } from 'tabler-icons-react';

import { useCompanyDetails } from '../../../features/companies/stores/company';
import { Navigation, Logo } from '../../elements';

import styles from './Header.module.scss';

export const Header = () => {
  const [mobileMenuOpened, { toggle, close }] = useDisclosure(false);

  const navigate = useNavigate();
  const companyDetails = useCompanyDetails();

  const handleSignout = () => {
    navigate('./login');
  };

  const companyBadge = companyDetails && (
    <div className={styles['header-badge']}>
      <Avatar size={40} radius={50} alt={'no image here'} color="indigo" />
      <p className={styles['header-badge-name']}>{companyDetails.company_name}</p>
    </div>
  );

  const signoutButton = (
    <Button variant="light" color="indigo" size="md" rightIcon={<Logout />} onClick={handleSignout}>
      Sign out
    </Button>
  );

  const headerContentDesktop = (
    <div className={styles['header-content-desktop']}>
      <div className={styles['header-group']}>
        <Logo />
        <Navigation />
      </div>
      <div className={styles['header-group']}>
        {companyBadge} {signoutButton}
      </div>
    </div>
  );

  const headerContentMobile = (
    <div className={styles['header-content-mobile']}>
      <Logo />{' '}
      <Drawer opened={mobileMenuOpened} onClose={close} position="top">
        <div>
          <div className={styles['header-group-mobile']}>
            <Logo />
            {companyBadge}
            {signoutButton}
          </div>
        </div>{' '}
      </Drawer>
      <Burger opened={mobileMenuOpened} onClick={toggle} color="blue" />
    </div>
  );

  return (
    <header className={styles['header']}>
      {headerContentDesktop}
      {headerContentMobile}
    </header>
  );
};
