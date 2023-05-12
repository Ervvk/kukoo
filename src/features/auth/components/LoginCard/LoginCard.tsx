import { Logo } from '../../../../components/elements';
import { LoginForm } from '../LoginForm';

import styles from './LoginCard.module.scss';

export const LoginCard = () => {
  return (
    <div className={styles['card']} title="Sign in">
      <Logo />
      <h1 className={styles['card-title']}>Sign In</h1>
      <LoginForm />
    </div>
  );
};
