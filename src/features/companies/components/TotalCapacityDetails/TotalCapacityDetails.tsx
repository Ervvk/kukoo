import { Button } from '@mantine/core';

import { TotalCapacityWidget } from '../../../companies/components';
import { useCompanyReport } from '../../stores/company';
import { calculateOccupiedPercentage, calculateOccupiedSpace } from '../../utils';

import styles from './TotalCapacityDetails.module.scss';

export const TotalCapacityDetails = () => {
  const companyReport = useCompanyReport();
  if (!companyReport) return <p>No data</p>;

  const { total_capacity, total_occupied, total_transactions_value } = companyReport;
  const occupiedSpace = calculateOccupiedSpace(total_occupied, total_transactions_value);
  const occupiedPercentage = calculateOccupiedPercentage(total_capacity, occupiedSpace);

  return (
    <div className={styles['capacity']}>
      <TotalCapacityWidget
        size={200}
        value={occupiedPercentage}
        thickness={20}
        textSize="1.75rem"
      />
      <div className={styles['capacity-content']}>
        <div className={styles['capacity-details']}>
          <p className={styles['capacity-details-title']}>Occupied Space</p>
          <p>
            {companyReport ? (
              <b className={styles['capacity-details-value']}>
                {occupiedSpace}/{total_capacity}
                <span>
                  {' '}
                  m<sup>3</sup>
                </span>
              </b>
            ) : (
              <p> No data</p>
            )}
          </p>
        </div>
        <Button variant="light"> Go to market</Button>
      </div>
    </div>
  );
};
