"use client"
import { useState } from 'react'

export default function ImportPage() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleImport = async () => {
    setLoading(true)
    const sources = input.split(/[\n,]+/).map(s => s.trim()).filter(Boolean)
    
    try {
      const res = await fetch('http://localhost:8000/api/products/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sources })
      })
      if (res.ok) {
        alert("取込に成功しました！")
        setInput("")
      }
    } catch (e) {
      alert("エラーが発生しました")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">商品一括取込</h1>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amazon ASIN または URL (1行に1つ入力)
        </label>
        <textarea 
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4" 
          placeholder="B0XXXXXXX&#10;https://amazon.co.jp..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={handleImport} 
          disabled={loading || !input}
          className={`w-full py-3 rounded-md text-white font-bold transition-all ${
            loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? "取込中..." : "商品を取得する"}
        </button>
      </div>
    </div>
  )
}
