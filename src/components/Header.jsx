;("use client")
import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, Search, Menu, X } from "lucide-react"

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
      <div className="container mx-auto px-4 h-16 flex items-center justify-between flex-wrap">
        <Link to="/" className="text-2xl font-bold text-[#2C3E50]">
          HomeNest Essentials
        </Link>

        <nav className="hidden md:flex items-center space-x-8 flex-wrap">
          {routes.map((route) => (
            <Link key={route.path} to={route.path} className="text-[#2C3E50] hover:text-[#E67E22] transition-colors">
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <Link to="/cart" className="relative">
            <ShoppingCart className="text-[#2C3E50] hover:text-[#E67E22] transition-colors" size={24} />
            <span className="absolute -top-2 -right-2 bg-[#E67E22] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>

          <Link to="/wishlist" className="relative">
            <Heart className="text-[#2C3E50] hover:text-[#E67E22] transition-colors" size={24} />
            <span className="absolute -top-2 -right-2 bg-[#E67E22] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>

          <Link
            to="/shop"
            className="hidden md:inline-flex bg-[#E67E22] hover:bg-[#D35400] text-white px-4 py-2 rounded-full transition-colors text-sm"
          >
            Shop Now
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#2C3E50] hover:text-[#E67E22] transition-colors ml-4"
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
                to={route.path}
                className="text-[#2C3E50] hover:text-[#E67E22] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20"
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

