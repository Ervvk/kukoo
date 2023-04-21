import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

import Logo from '../Logo/Logo';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Dashboard',

      command: () => {
        navigate('./');
      },
    },
    {
      label: 'Market',

      command: () => {
        navigate('/market');
      },
    },
  ];

  return (
    <div className={styles['navigation']}>
      {' '}
      <Menubar start={<Logo />} model={items} />
    </div>
  );
};
