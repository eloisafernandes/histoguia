import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const months = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40, 0, 2, 10, 6, 50],
        fill: false,
        backgroundColor: '#B2B3F1',
        borderColor: '#D3D3D3',
        pointRadius: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false, 
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          color: 'white', 
        },
      },
      y: {
        ticks: {
          color: 'white', 
        },
      },
    },
  };

  return (
    <div className='bg-[#130338] p-5 md:p-10 ml-2 rounded-[25px] w-1/2'>
      <div className="chart-container font-white w-[310px] md:w-full h-[200px]  md:h-[330px]" > 
        <Line data={data} options={options} />
      </div>
    </div>

  );
};

export default LineChart;