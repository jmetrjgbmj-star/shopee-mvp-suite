"use client"
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function ImageProcessPage() {
  const { id } = useParams()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleProcess = () => {
    setIsProcessing(true)
    // バックエンドのPillow処理を呼び出す想定
    setTimeout(() => {
      setIsProcessing(false)
      alert("Shopee用にリサイズ・白背景加工が完了しました")
    }, 1500)
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">画像加工エディタ (ASIN: {id})</h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-sm text-gray-500">元画像 (Amazon)</p>
          <div className="aspect-square bg-gray-100 border rounded flex items-center justify-center">
             <img src="https://placeholder.com" alt="original" className="max-h-full" />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">加工後プレビュー (Shopee推奨: 800x800)</p>
          <div className="aspect-square bg-white border-2 border-dashed border-blue-300 rounded flex items-center justify-center">
             {isProcessing ? "加工中..." : <img src="https://placeholder.com" alt="preview" className="max-h-full" />}
          </div>
          <button 
            onClick={handleProcess}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            自動リサイズ・背景白抜き実行
          </button>
        </div>
      </div>
    </div>
  )
}
