import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About HomeNest Essentials</h1>

        <div className="prose prose-lg mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to HomeNest Essentials, where we believe that every home deserves to be beautiful, comfortable, and
            functional. Founded in 2023, we've made it our mission to provide high-quality home essentials that combine
            style, durability, and affordability.
          </p>

          <div className="my-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To transform houses into homes by providing carefully curated, high-quality essentials that enhance daily
              living and create lasting memories.
            </p>
          </div>

          <div className="my-12">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality, ensuring each product meets our high standards.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">We're committed to eco-friendly practices and sustainable materials.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our top priority, with exceptional service at every step.
                </p>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              Our dedicated team of home enthusiasts and design experts work tirelessly to bring you the best products
              and inspiration for your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

