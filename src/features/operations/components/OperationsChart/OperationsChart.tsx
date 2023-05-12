import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';
import { timestampToDate } from '../../../../utils/calculations';
import { OperationMonthly } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'time' as const,
      grid: {
        display: false,
      },
      time: {
        unit: 'month' as const,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

type OperationsChartProps = {
  chartData: OperationMonthly[] | undefined;
};

export const OperationsChart = ({ chartData }: OperationsChartProps) => {
  if (!chartData) return <p>No data</p>;
  const labels = chartData.map((element) => timestampToDate(element.month));
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Operations Value',
        data: chartData.map((el) => el.occupied_value),
        borderColor: 'blue',
        backgroundColor: 'white',
      },
    ],
  };
  return (
    <div style={{ width: '33rem', height: '12.5rem' }}>
      <Line options={options} data={data} />
    </div>
  );
};
