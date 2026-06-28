import React from 'react'
import ListingCard from './ListingCard'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'

const sample = [
  { id: 1, title: '3BHK Apartment in Bangalore', price: '₹ 1.2 Cr', area: '1500 sqft', img: house1 },
  { id: 2, title: '2BHK Condo in Mumbai', price: '₹ 95 L', area: '900 sqft', img: house2 },
  { id: 3, title: 'Villa near Goa beach', price: '₹ 3.4 Cr', area: '3500 sqft', img: house3 },
  { id: 4, title: 'Studio in Delhi', price: '₹ 42 L', area: '400 sqft', img: house4 }
]

export default function Listings() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Latest listings</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sample.map(l => <ListingCard key={l.id} {...l} />)}
      </div>
    </section>
  )
}
