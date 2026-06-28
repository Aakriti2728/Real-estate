import React from 'react'

export default function ListingCard({ title, price, area, img }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={img} alt={title} className="h-40 w-full object-cover rounded-md mb-3" />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-slate-500">{area}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold text-indigo-600">{price}</div>
        <button className="px-3 py-1 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700">Contact</button>
      </div>
    </div>
  )
}
