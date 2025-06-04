import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useModelContext } from '../../context/ModelContext';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DataComparison: React.FC = () => {
  const { predictionData, modelConfig } = useModelContext();
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#D1D5DB',
          font: {
            family: 'system-ui, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 55, 0.9)',
        titleColor: '#E5E7EB',
        bodyColor: '#D1D5DB',
        borderColor: 'rgba(55, 65, 81, 0.5)',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        intersect: false,
        mode: 'index' as const,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 3,
        hoverRadius: 5,
      },
    },
  };
  
  // Generate labels based on timeSteps
  const timeLabels = [...Array(Math.ceil(modelConfig.timeSteps / 6)).keys()].map(
    i => `T+${i * 6}h`
  );
  
  // Sample data for visualization - would come from model in real app
  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Historical Data',
        data: timeLabels.map((_, i) => 30 - i * 0.5 + Math.random() * 2),
        borderColor: 'rgba(34, 211, 238, 1)', // Teal
        backgroundColor: 'rgba(34, 211, 238, 0.1)',
        borderWidth: 2,
      },
      {
        label: 'ML Prediction',
        data: timeLabels.map((_, i) => 30 - i * 0.5 + Math.random() * 3 - 1),
        borderColor: 'rgba(59, 130, 246, 1)', // Blue
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
      },
      {
        label: 'Full Physics Model',
        data: timeLabels.map((_, i) => 30 - i * 0.5 + Math.random() * 1.5 - 0.5),
        borderColor: 'rgba(239, 68, 68, 1)', // Red
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
      },
    ],
  };
  
  return (
    <div className="h-80">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default DataComparison;