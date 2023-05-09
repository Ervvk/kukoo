export const calculatePercentage = (partValue: number, totalValue: number) =>
  parseFloat(((partValue / totalValue) * 100).toFixed(2));

export const timestampToDate = (timestamp: Date) => new Date(timestamp).toISOString();
