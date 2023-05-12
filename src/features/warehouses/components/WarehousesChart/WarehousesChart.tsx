import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { WarehouseDetails } from '../../types';

import styles from './WarehousesChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: { stacked: true },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

type WarehousesChartProps = {
  chartData: WarehouseDetails[] | undefined;
};

export const WarehousesChart = ({ chartData }: WarehousesChartProps) => {
  if (!chartData) return <p>No data</p>;
  const labels = chartData.map((item) => item.warehouse_name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Occupied space',
        data: chartData.map((item) => item.occupied_sum),
        backgroundColor: 'rgba(0, 14, 186, 1)',
      },
      {
        label: 'Rented space',
        data: chartData.map((item) => item.transactions_value),
        backgroundColor: 'rgba(0, 14, 186, .65)',
      },
      {
        label: 'Free space',
        data: chartData.map(
          (item) => item.capacity - (item.occupied_sum + item.transactions_value)
        ),
        backgroundColor: 'rgba(0, 14, 186, .25)',
      },
    ],
  };

  return (
    <div className={styles['chart-wrapper']}>
      <Bar options={options} data={data} />
    </div>
  );
};
