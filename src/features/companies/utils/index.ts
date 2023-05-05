import { calculatePercentage } from '../../../utils/calculations';

export const calculateOccupiedSpace = (occupied: number, rent_to: number) => occupied + rent_to;
export const calculateOccupiedPercentage = (capacity: number, occupied_total: number) =>
  calculatePercentage(occupied_total, capacity);
