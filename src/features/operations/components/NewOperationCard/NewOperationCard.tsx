import { NewOperationForm } from '..';

import styles from './NewOperationCard.module.scss';

export const NewOperationCard = () => {
  return (
    <div className={styles['card']}>
      <NewOperationForm />
    </div>
  );
};
