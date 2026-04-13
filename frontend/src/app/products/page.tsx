"use client"
import { useEffect, useState } from 'react'

export default function ProductListPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">登録済み商品一覧</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-medium text-gray-600">ASIN</th>
              <th className="p-4 font-medium text-gray-600">商品名</th>
              <th className="p-4 font-medium text-gray-600">価格 (JPY)</th>
              <th className="p-4 font-medium text-gray-600">ステータス</th>
              <th className="p-4 font-medium text-gray-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: any) => (
              <tr key={p.asin} className="border-b hover:bg-gray-50">
                <td className="p-4 text-sm">{p.asin}</td>
                <td className="p-4 text-sm font-medium">{p.original_title}</td>
                <td className="p-4 text-sm">¥{p.original_price?.toLocaleString()}</td>
                <td className="p-4 text-sm">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                    {p.status}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  <button className="text-blue-600 hover:underline">編集</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className="p-10 text-center text-gray-500">商品がありません。取込画面から追加してください。</div>
        )}
      </div>
    </div>
  )
}
