"use client"

import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Slider } from "../components/ui/slider"
import { Checkbox } from "../components/ui/checkbox"

const categories = [
  { id: "kitchen", label: "Kitchen & Cooking" },
  { id: "garden", label: "House & Garden" },
  { id: "fashion", label: "Fashion & Beauty" },
  { id: "decor", label: "Home Decor" },
]

const products = [
  {
    id: 1,
    name: "Modern Lamp",
    price: 59.99,
    category: "decor",
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg",
  },
  {
    id: 2,
    name: "Ceramic Vase",
    price: 39.99,
    category: "decor",
    image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg",
  },
  {
    id: 3,
    name: "Kitchen Mixer",
    price: 129.99,
    category: "kitchen",
    image: "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg",
  },
  {
    id: 4,
    name: "Garden Chair",
    price: 79.99,
    category: "garden",
    image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
  },
  {
    id: 5,
    name: "Makeup Set",
    price: 49.99,
    category: "fashion",
    image: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg",
  },
]

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesPrice
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category.id])
                      } else {
                        setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
                      }
                    }}
                  />
                  <label
                    htmlFor={category.id}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Price Range</h2>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
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
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/shop/${product.category}/${product.id}`}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <button className="mt-4 w-full bg-[#E67E22] hover:bg-[#D35400] text-white px-4 py-2 rounded-full transition-colors">
                      View Product
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop

