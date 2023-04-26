import { Button } from '@mantine/core';

import { LoginForm } from '../LoginForm';

import styles from './LoginCard.module.scss';

export const LoginCard = () => {
  return (
    <div className={styles['card']} title="Sign in">
      <h1>Sign In</h1>
      <p>Kuko App</p>
      <LoginForm />
      <Button className={styles['button-demo']} variant="light">
        Run Demo
      </Button>
    </div>
  );
};
