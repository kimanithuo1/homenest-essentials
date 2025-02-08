"use client"

import React from "react"
import { useParams } from "react-router-dom"
import { Slider } from "../components/ui/slider"

const products = {
  kitchen: [
    {
      id: 1,
      name: "Kitchen Mixer",
      price: 129.99,
      image: "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg",
    },
    {
      id: 2,
      name: "Cooking Pot Set",
      price: 89.99,
      image: "https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg",
    },
    {
      id: 3,
      name: "Chef's Knife",
      price: 49.99,
      image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg",
    },
  ],
  garden: [
    {
      id: 1,
      name: "Garden Chair",
      price: 79.99,
      image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
    },
    {
      id: 2,
      name: "Plant Pot",
      price: 24.99,
      image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg",
    },
    {
      id: 3,
      name: "Garden Tools Set",
      price: 59.99,
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg",
    },
  ],
  fashion: [
    {
      id: 1,
      name: "Makeup Set",
      price: 49.99,
      image: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg",
    },
    { id: 2, name: "Dress", price: 79.99, image: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg" },
    {
      id: 3,
      name: "Sunglasses",
      price: 29.99,
      image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
    },
  ],
  decor: [
    {
      id: 1,
      name: "Modern Lamp",
      price: 59.99,
      image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg",
    },
    {
      id: 2,
      name: "Ceramic Vase",
      price: 39.99,
      image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg",
    },
    {
      id: 3,
      name: "Wall Art",
      price: 89.99,
      image: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg",
    },
  ],
}

const CategoryShop = () => {
  const { category } = useParams()
  const [priceRange, setPriceRange] = React.useState([0, 200])
  const [sortBy, setSortBy] = React.useState("featured")

  const categoryProducts = products[category] || []

  const filteredProducts = categoryProducts.filter((product) => {
    return product.price >= priceRange[0] && product.price <= priceRange[1]
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category} Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Price Range</h2>
            <Slider
              defaultValue={[0, 200]}
              max={200}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Sort By</h2>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full p-2 border rounded-md">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-[#E67E22] hover:bg-[#D35400] text-white px-4 py-2 rounded-full transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryShop

