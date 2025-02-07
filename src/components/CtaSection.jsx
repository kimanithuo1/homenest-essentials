import React from 'react'; // Add this line
"use client"
const CtaSection = () => {
    return (
      <section className="py-16 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Exclusive Deals & Updates</h2>
          <p className="mb-8">Subscribe to our newsletter and stay updated on the latest trends and offers.</p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-2 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-gray-800"
            />
            <button
              type="submit"
              className="bg-[#E67E22] text-white px-6 py-2 rounded-r-full hover:bg-[#D35400] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    )
  }
  
  export default CtaSection
  
  