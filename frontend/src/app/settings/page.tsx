"use client"
import { useState } from 'react'

export default function SettingsPage() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">出品設定 (シンガポール)</h1>
      <div className="bg-white shadow rounded-xl p-8 space-y-6 border">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">計算パラメーター</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">為替レート (1 SGD = ? JPY)</label>
              <input type="number" defaultValue="110.5" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">目標利益率 (%)</label>
              <input type="number" defaultValue="20" className="w-full p-2 border rounded" />
            </div>
          </div>
        </section>
        
        <section className="space-y-4 pt-4">
          <h2 className="text-lg font-semibold border-b pb-2">Shopee手数料設定</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">販売手数料 (%)</label>
              <input type="number" defaultValue="9" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">シンガポールGST (%)</label>
              <input type="number" defaultValue="9" className="w-full p-2 border rounded" />
            </div>
          </div>
        </section>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700">
          設定を保存する
        </button>
      </div>
    </div>
  )
}
