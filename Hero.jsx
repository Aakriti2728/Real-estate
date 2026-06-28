import React from 'react'

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your next home</h1>
          <p className="mb-6 max-w-xl">Search top listings from verified agents. Beautiful UI built with React and TailwindCSS.</p>
          <div className="flex gap-2">
            <input className="px-4 py-2 rounded-l-md w-full max-w-md text-black" placeholder="Search city, neighbourhood or zip" />
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-r-md font-semibold">Search</button>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <div className="bg-white/30 rounded-lg p-6">
            <div className="h-48 bg-white/60 rounded-md flex items-center justify-center">Featured image</div>
            <p className="mt-4 text-sm">Example featured listing preview.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
