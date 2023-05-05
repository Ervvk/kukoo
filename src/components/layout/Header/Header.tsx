import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Logout } from 'tabler-icons-react';

import { Navigation, Logo } from '../../elements';

import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

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
