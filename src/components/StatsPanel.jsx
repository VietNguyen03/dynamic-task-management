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
        backgroundColor: ['#10B981', '#EF4444'],    // Completing and pending bar color 
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Task Statistics</h2>
      <Bar data={data} />
    </div>
  );
};

export default StatsPanel;
