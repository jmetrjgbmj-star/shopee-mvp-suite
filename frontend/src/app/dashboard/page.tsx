export default function DashboardPage() {
  const stats =

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">ダッシュボード</h1>
      <div className="grid grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">{s.label}</p>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 bg-blue-50 p-8 rounded-2xl border border-blue-100 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-blue-800">新しい商品を取り込む</h2>
          <p className="text-blue-600">AmazonのURLから数秒でShopee向けデータを作成します</p>
        </div>
        <a href="/products/import" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 shadow-lg transition">
          取込を開始する
        </a>
      </div>
    </div>
  )
}
