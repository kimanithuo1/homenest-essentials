import React from "react";
"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react"
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
                  {/* <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 cursor-pointer" />
                  </div> */}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-gray-300 fill-current" />
                    <span className="ml-1 text-sm text-gray-500">(4.0)</span>
                  </div>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={product.link}
                      className="bg-[#E67E22] hover:bg-[#D35400] text-white px-4 py-2 rounded-full transition-colors inline-flex items-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Link>
                    <Link href={product.link} className="text-[#E67E22] hover:text-[#D35400] transition-colors">
                      View Details
                    </Link>
                  </div>
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

