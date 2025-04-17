import { useState } from 'react'

export default function PromptInput({ setChartData }) {
  const [prompt, setPrompt] = useState("")

  const handleGenerate = () => {
    const fakeResponse = {
      labels: ['Marketing', 'Salaries', 'Utilities', 'Software'],
      values: [1200, 3000, 450, 650]
    }
    setChartData(fakeResponse)
  }

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Ask AI something..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="p-2 border rounded w-full text-black"
      />
      <button onClick={handleGenerate} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Generate Chart
      </button>
    </div>
  )
}