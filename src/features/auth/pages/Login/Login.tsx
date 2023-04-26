import { LoginCard } from '../../components';

import styles from './Login.module.scss';

export const Login = () => {
  return (
    <div className={styles['layout']}>
      <LoginCard />
    </div>
  );
};
