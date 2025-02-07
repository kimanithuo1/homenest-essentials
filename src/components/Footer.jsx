import React from "react";
"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Subscribed with email:", email)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#E67E22] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E67E22] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#E67E22] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-[#E67E22] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#E67E22] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#E67E22] transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#E67E22] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#E67E22] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#E67E22] transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            {subscribed ? (
              <p className="text-green-400">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#E67E22] text-gray-800 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#E67E22] text-white px-4 py-2 rounded-r-full hover:bg-[#D35400] transition-colors"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 HomeNest Essentials. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/privacy" className="text-sm hover:text-[#E67E22] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-[#E67E22] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

