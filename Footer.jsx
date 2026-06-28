import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} RealEstatePro</div>
        <div className="space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
