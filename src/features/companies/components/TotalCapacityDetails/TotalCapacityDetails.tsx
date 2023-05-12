import { TotalCapacityWidget } from '../../../companies/components';
import { useCompanyDetails } from '../../stores/company';
import { calculateOccupiedPercentage, calculateOccupiedSpace } from '../../utils';

import styles from './TotalCapacityDetails.module.scss';

export const TotalCapacityDetails = () => {
  const companyDetails = useCompanyDetails();
  if (!companyDetails) return <p>No data</p>;

  const { total_capacity, total_occupied, total_transactions_value } = companyDetails;
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
            {companyDetails ? (
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
          <p className={styles['capacity-detail-small']}>All company warehouses</p>
        </div>
      </div>
    </div>
  );
};
