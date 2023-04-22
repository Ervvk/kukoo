import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className={styles['main']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
