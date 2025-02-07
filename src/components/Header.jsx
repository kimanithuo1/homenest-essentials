import React from 'react'; // Add this line
"use client"
import { useState } from "react"
import { ShoppingCart, Heart, Search, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login/Register", path: "/login" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary-dark">
          HomeNest Essentials
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link key={route.path} href={route.path} className="text-primary-dark hover:text-primary transition-colors">
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <Link href="/cart" className="relative">
            <ShoppingCart className="text-primary-dark hover:text-primary transition-colors" size={24} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>

          <Link href="/wishlist" className="relative">
            <Heart className="text-primary-dark hover:text-primary transition-colors" size={24} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>

          <Link
            href="/shop"
            className="hidden md:inline-flex bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-colors"
          >
            Shop Now
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-dark hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-primary-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
