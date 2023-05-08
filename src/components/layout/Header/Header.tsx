import { Button, Avatar } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Logout } from 'tabler-icons-react';

import { useCompanyDetails } from '../../../features/companies/stores/company';
import { Navigation, Logo } from '../../elements';

import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const companyDetails = useCompanyDetails();

  const handleSignout = () => {
    navigate('./login');
  };

  return (
    <header className={styles['header']}>
      <div className={styles['header-group']}>
        <Logo />
        <Navigation />
      </div>
      <div className={styles['header-group']} style={{ marginRight: '3rem' }}>
        {companyDetails && (
          <div className={styles['header-badge']}>
            <Avatar size={40} radius={50} alt={'no image here'} color="indigo" />
            <p>{companyDetails.company_name}</p>
          </div>
        )}
        <Button
          variant="light"
          color="indigo"
          size="md"
          rightIcon={<Logout />}
          onClick={handleSignout}
        >
          Sign out
        </Button>
      </div>
    </header>
  );
};
