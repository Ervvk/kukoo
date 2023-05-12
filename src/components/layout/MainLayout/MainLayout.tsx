import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles['content']}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
