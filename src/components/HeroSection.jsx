import React from "react";
import { Link } from "react-router-dom"


const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-gray-900/60" />
      <div className="relative z-10 text-center text-white space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Elevate Your Home & Style</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Explore the best in Kitchen, Fashion, Beauty & Home Essentials
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/shop"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection