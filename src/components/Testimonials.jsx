import React from 'react'; // Add this line
"use client"

const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      review:
        "HomeNest Essentials has transformed my living space. Their products are not only beautiful but also functional. I'm a customer for life!",
    },
    {
      name: "Michael Chen",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      review:
        "I love the variety of products offered by HomeNest Essentials. From kitchen gadgets to home decor, they have it all. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      review:
        "The quality of HomeNest Essentials products is outstanding. I've received so many compliments on my recent purchases. Thank you!",
    },
  ]
  
  const Testimonials = () => {
    return (
      <section className="py-16 bg-neutral-bg">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-lg text-primary-dark">{testimonial.name}</h3>
                </div>
                <p className="text-neutral-text italic leading-relaxed">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  