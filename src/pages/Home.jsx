import React from 'react';
import HeroSection from "../components/HeroSection"
import CategoryHighlights from "../components/CategoryHighlights"
import FeaturedProducts from "../components/FeaturedProducts"
import Testimonials from "../components/Testimonials"
import CtaSection from "../components/CtaSection"

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CategoryHighlights />
      <FeaturedProducts />
      <Testimonials />
      <CtaSection />
    </main>
  )
}

export default Home

