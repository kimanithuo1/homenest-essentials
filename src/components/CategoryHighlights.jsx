import React from 'react'; // Add this line
"use client"
import { Link } from "react-router-dom"


const categories = [
  {
    title: "Kitchen & Cooking",
    emoji: "🍽️",
    description: "Discover amazing products for your kitchen & cooking.",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    link: "/shop/kitchen",
  },
  {
    title: "House & Garden",
    emoji: "🌿",
    description: "Discover amazing products for your house & garden.",
    image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg",
    link: "/shop/garden",
  },
  {
    title: "Fashion & Beauty",
    emoji: "💄",
    description: "Discover amazing products for your fashion & beauty.",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    link: "/shop/fashion",
  },
  {
    title: "Home Decor",
    emoji: "🏡",
    description: "Discover amazing products for your home decor.",
    image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg",
    link: "/shop/decor",
  },
]

const CategoryHighlights = () => {
  return (
    <section className="py-16 bg-neutral-bg">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {category.title} <span>{category.emoji}</span>
                </h3>
                <p className="text-neutral-text mb-4">{category.description}</p>
                <Link
                  href={category.link}
                  className="inline-flex items-center justify-center w-full bg-accent-green hover:bg-accent-hover text-white px-6 py-2 rounded-full transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryHighlights

