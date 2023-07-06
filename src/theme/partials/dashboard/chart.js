import React from 'react';
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
import { useMetric } from '@/hooks/useMetric';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function get_label(metric){
    let result = []
    metric.map(item => result.push(item.ten))
    return result
}

function get_data(metric){
    let result = []
    metric.map(item => result.push(item.tong_sl_x_dg))
    return result
}

export default function ChartMetric(){

    const {metric,first_loading} = useMetric()

    if(first_loading) return

    const labels = get_label(metric);

    const data = {
        labels,
        datasets: [
            {
                label: 'Doanh số các shop',
                data: get_data(metric),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className='chart'>
            <Bar options={options} data={data} />;
        </div>
    )
}