import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsPanel = ({ tasks }) => {
  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;

  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: 'Tasks',
        data: [completed, pending],
        backgroundColor: ['#10B981', '#EF4444'], // solid green and red
        hoverBackgroundColor: ['#10B981', '#EF4444'], // match colors on hover
        borderRadius: 0,
        barThickness: 60,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // disables hover tooltips
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Task Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatsPanel;
