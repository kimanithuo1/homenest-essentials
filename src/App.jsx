import React from 'react'; // Add this line
"use client"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CategoryHighlights from "./components/CategoryHighlights"
import FeaturedProducts from "./components/FeaturedProducts"
import Testimonials from "./components/Testimonials"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <CategoryHighlights />
        <FeaturedProducts />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

