import { useEffect, useState } from 'react'
import PromptInput from '../components/PromptInput'
import ChartBox from '../components/ChartBox'

export default function Dashboard() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) window.location.href = "/login"
  }, [])

  return (
    <div className="p-8 bg-gray-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">📊 AI Xero Dashboard (Demo)</h1>
      <PromptInput setChartData={setChartData} />
      <ChartBox chartData={chartData} />
    </div>
  )
}