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

const deliveryData = [
  { date: '2022-01-01', occupied_value: 10 },

  { date: '2022-02-09', occupied_value: 22 },
  { date: '2022-03-02', occupied_value: 5 },

  { date: '2022-04-09', occupied_value: 22 },
];

export const DeliveriesChart = () => {
  const labels = deliveryData.map((element) => element.date);
  const data = {
    labels,
    datasets: [
      {
        label: 'Daily Delivery Size',
        data: deliveryData.map((el) => el.occupied_value),
        borderColor: 'blue',
        backgroundColor: 'white',
      },
    ],
  };
  return (
    <div style={{ width: '35rem', height: '12.5rem' }}>
      <Line options={options} data={data} />
    </div>
  );
};
