import React from 'react';
"use client"

const cartItems = [
  {
    id: 1,
    name: "Modern Lamp",
    price: 59.99,
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Kitchen Mixer",
    price: 129.99,
    image: "https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg",
    quantity: 2,
  },
]

const Cart = () => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-200 px-2 py-1 rounded-md">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="bg-gray-200 px-2 py-1 rounded-md">+</button>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total:</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-2 rounded-full mt-6 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart

