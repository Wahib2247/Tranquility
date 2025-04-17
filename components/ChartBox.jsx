import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(BarElement, CategoryScale, LinearScale)

export default function ChartBox({ chartData }) {
  if (!chartData) return null

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Expenses',
        data: chartData.values,
        backgroundColor: 'rgba(0, 255, 145, 0.7)'
      }
    ]
  }

  return <Bar data={data} />
}