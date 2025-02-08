import React from 'react';
const wishlistItems = [
  {
    id: 2,
    name: "Ceramic Vase",
    price: 39.99,
    image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg",
  },
  {
    id: 4,
    name: "Garden Chair",
    price: 79.99,
    image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
  },
]

const Wishlist = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-full transition-colors">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-full transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist

