import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white border-b p-4 mb-6">
          <div className="max-w-6xl mx-auto flex gap-6">
            <span className="font-bold text-blue-600">Shopee MVP</span>
            <a href="/products" className="text-gray-600 hover:text-blue-500">商品一覧</a>
            <a href="/products/import" className="text-gray-600 hover:text-blue-500">一括取込</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
