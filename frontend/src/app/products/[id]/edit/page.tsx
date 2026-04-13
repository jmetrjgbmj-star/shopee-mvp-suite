"use client"
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function EditProductPage() {
  const { id } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    // 本来はIDで1件取得しますが、MVPでは一覧から該当ASINを探す想定
    fetch(`http://localhost:8000/api/products`)
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: any) => p.asin === id)
        setProduct(found)
      })
  }, [id])

  if (!product) return <div className="p-10 text-center">読み込み中...</div>

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">商品情報を編集 (ASIN: {id})</h1>
      
      <div className="grid grid-cols-2 gap-8">
        {/* 左側：Amazon元情報 */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="font-bold mb-4 text-gray-500">Amazon元データ</h2>
          <div className="mb-4">
            <label className="block text-xs text-gray-400">タイトル</label>
            <p className="text-sm">{product.original_title}</p>
          </div>
          <div className="mb-4">
            <label className="block text-xs text-gray-400">元価格</label>
            <p className="text-sm font-bold">¥{product.original_price}</p>
          </div>
          <img src={product.original_images[0]} className="w-full rounded border" />
        </div>

        {/* 右側：Shopee編集フォーム */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="font-bold mb-4 text-blue-600">Shopee出品データ</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Shopee商品名</label>
              <textarea 
                className="w-full p-2 border rounded text-sm" 
                rows={3} 
                defaultValue={product.original_title}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">販売価格 (SGD)</label>
              <input type="number" className="w-full p-2 border rounded" placeholder="0.00" />
              <p className="text-xs text-gray-400 mt-1">※為替と手数料を考慮して自動計算されます</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700">
              保存して出品待ちへ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
