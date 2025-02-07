import React from "react";
"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, Search, Menu, X, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    {
      name: "Shop",
      path: "/shop",
      subMenu: [
        { name: "All Products", path: "/shop" },
        { name: "Kitchen & Cooking", path: "/shop/kitchen" },
        { name: "House & Garden", path: "/shop/garden" },
        { name: "Fashion & Beauty", path: "/shop/fashion" },
        { name: "Home Decor", path: "/shop/decor" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login/Register", path: "/login" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#2C3E50]">
          HomeNest Essentials
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <div key={route.path} className="relative group">
              {route.subMenu ? (
                <>
                  <button
                    className="text-[#2C3E50] hover:text-[#E67E22] transition-colors flex items-center"
                    onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                  >
                    {route.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isShopDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2">
                      {route.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-[#2C3E50] hover:bg-gray-100"
                          onClick={() => setIsShopDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={route.path} className="text-[#2C3E50] hover:text-[#E67E22] transition-colors">
                  {route.name}
                </Link>
              )}
            </div>
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
            className="hidden md:inline-flex bg-[#E67E22] hover:bg-[#D35400] text-white px-6 py-2 rounded-full transition-colors"
          >
            Shop Now
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#2C3E50] hover:text-[#E67E22] transition-colors"
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

