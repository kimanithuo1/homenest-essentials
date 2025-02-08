import React from 'react';
import { useParams } from "react-router-dom"

const products = [
  {
    id: 1,
    name: "Modern Lamp",
    price: 59.99,
    category: "decor",
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg",
    description: "A sleek and modern lamp that will brighten up any room.",
    features: ["Adjustable brightness", "Energy-efficient LED", "Touch-sensitive controls"],
  },
  {
    id: 2,
    name: "Ceramic Vase",
    price: 39.99,
    category: "decor",
    image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg",
    description: "A beautiful ceramic vase perfect for displaying your favorite flowers.",
    features: ["Hand-crafted", "Durable ceramic material", "Versatile design"],
  },
  {
    id: 3,
    name: "Kitchen Mixer",
    price: 129.99,
    category: "kitchen",
    image: "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg",
    description: "A powerful kitchen mixer for all your baking needs.",
    features: ["Multiple speed settings", "Large capacity bowl", "Includes various attachments"],
  },
  {
    id: 4,
    name: "Garden Chair",
    price: 79.99,
    category: "garden",
    image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
    description: "A comfortable and stylish chair for your garden or patio.",
    features: ["Weather-resistant", "Ergonomic design", "Easy to clean"],
  },
  {
    id: 5,
    name: "Makeup Set",
    price: 49.99,
    category: "fashion",
    image: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg",
    description: "A complete makeup set with everything you need for a flawless look.",
    features: ["Includes brushes and applicators", "Variety of colors", "Travel-friendly case"],
  },
]

const ProductDetail = () => {
  const { category, id } = useParams()
  const product = products.find((p) => p.id === Number.parseInt(id) && p.category === category)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-[#E67E22] mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside mb-6">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <button className="bg-[#E67E22] hover:bg-[#D35400] text-white px-6 py-2 rounded-full transition-colors">
              Add to Cart
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

