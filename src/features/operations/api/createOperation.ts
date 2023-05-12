import { getCurrentDate, supabase } from '../../../lib/supabase';
import { NewOperationDetails, OperationTypeValue } from '../types';

export const createOperation = async (
  operationType: OperationTypeValue,
  operationDetails: NewOperationDetails
) => {
  try {
    const { status, error } = await supabase.from('deliveries').insert({
      date: getCurrentDate(),
      warehouse_id: operationDetails.warehouse_id,
      company_id: operationDetails.company_id,
      occupied_value: operationDetails.value,
      operation_type_id: parseInt(operationType),
    });
    if (error) throw error;
    return status;
  } catch (error) {
    console.log('rejected error', error);
  }
};
