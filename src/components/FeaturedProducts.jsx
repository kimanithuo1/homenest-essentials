import React from "react";
"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"


const products = [
  {
    name: "Modern Lamp",
    price: 59.99,
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg",
    link: "/shop/product/modern-lamp",
  },
  {
    name: "Cozy Blanket",
    price: 39.99,
    image: "https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg",
    link: "/shop/product/cozy-blanket",
  },
  {
    name: "Ceramic Vase",
    price: 29.99,
    image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg",
    link: "/shop/product/ceramic-vase",
  },
  {
    name: "Wooden Chair",
    price: 89.99,
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    link: "/shop/product/wooden-chair",
  },
]

const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0)

  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % products.length)
  }

  const prevProducts = () => {
    setStartIndex((prevIndex) => (prevIndex - 4 + products.length) % products.length)
  }

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">Trending Products</h2>
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevProducts}
              className="p-3 rounded-full bg-neutral-bg hover:bg-gray-200 transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProducts}
              className="p-3 rounded-full bg-neutral-bg hover:bg-gray-200 transition-colors"
              aria-label="Next products"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...products, ...products].slice(startIndex, startIndex + 4).map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-neutral-text mb-4">${product.price.toFixed(2)}</p>
                  <Link
                    href={product.link}
                    className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

