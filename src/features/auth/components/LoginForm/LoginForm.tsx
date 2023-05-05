import { TextInput, Stack, Button, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCodeAuth } from '../../stores/auth';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const authUser = useCodeAuth();
  const navigate = useNavigate();
  const [codeError, setCodeError] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      code: '',
    },

    validate: {
      code: (val) =>
        /^[a-f0-9]{32}$/gi.test(val) ? null : 'The access code should be 32 characters md5 hash',
    },
  });

  const handleFormSubmit = () =>
    form.onSubmit(async (formValues) => {
      const shouldPass = await authUser(formValues.code);
      setCodeError(!shouldPass);
      if (shouldPass) navigate('/');
    });

  return (
    <form onSubmit={handleFormSubmit()} className={styles['login-form']}>
      <Stack>
        {codeError === true && (
          <p className={styles['login-error']}>Wrong access code! Try again.</p>
        )}
        <TextInput
          required
          label="Access Code"
          placeholder="Your access code"
          value={form.values.code}
          onChange={(event) => form.setFieldValue('code', event.currentTarget.value)}
          error={form.errors.code}
          radius="md"
        />
        <Space />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};
