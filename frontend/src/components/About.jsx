import React from 'react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Emma Baker",
      role: "Head Pastry Chef",
      bio: "Emma has been creating stunning cakes for over 15 years. She trained at Le Cordon Bleu and brings classic techniques with modern inspiration.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Michael Chen",
      role: "Cake Designer",
      bio: "Michael specializes in 3D sculpted cakes and elaborate wedding designs. His artistic background helps create truly unique experiences.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Sophia Patel",
      role: "Customer Relations",
      bio: "Sophia ensures every customer gets exactly what they envision. She's the friendly face that helps bring your cake dreams to reality.",
      image: "/api/placeholder/120/120"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Jennifer L.",
      comment: "The birthday cake for my daughter was absolutely perfect! Not only was it beautiful, but it tasted amazing too. Everyone at the party was impressed.",
      rating: 5
    },
    {
      name: "Robert T.",
      comment: "Our wedding cake exceeded all expectations. The team was so professional throughout the process and delivered exactly what we wanted.",
      rating: 5
    },
    {
      name: "Sarah K.",
      comment: "I've ordered multiple cakes from Sweet Delights and have never been disappointed. Their attention to detail is remarkable.",
      rating: 5
    }
  ];

  return (
    <div className=" min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">About Sweet Delights Cake Shop</h1>
          <p className="text-gray-600">Creating sweet memories since 2010</p>
        </header>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sweet Delights began as a small home kitchen operation in 2010, founded by Emma Baker with a simple mission: to create beautiful, delicious cakes that make life's special moments even more memorable.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a passion project quickly blossomed into a beloved local business. As word spread about our attention to detail and exceptional flavors, we expanded to our current location in 2015.
              </p>
              <p className="text-gray-700">
                Today, we pride ourselves on using only the finest ingredients, supporting local suppliers, and creating custom designs for any occasion. Every cake that leaves our kitchen is crafted with care, creativity, and a commitment to excellence.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/api/placeholder/400/300" alt="Our bakery" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-pink-600">🎂</span>
              </div>
              <h3 className="text-xl font-medium text-pink-700 mb-2">Quality</h3>
              <p className="text-gray-600">We use only premium ingredients and never compromise on taste or freshness.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-pink-600">🎨</span>
              </div>
              <h3 className="text-xl font-medium text-pink-700 mb-2">Creativity</h3>
              <p className="text-gray-600">Each cake is a unique creation, customized to reflect your personal style and occasion.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-pink-600">💝</span>
              </div>
              <h3 className="text-xl font-medium text-pink-700 mb-2">Service</h3>
              <p className="text-gray-600">We treat every customer like family and strive to exceed expectations with every order.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-pink-50 rounded-lg">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-3 object-cover" />
                <h3 className="text-lg font-medium text-pink-700">{member.name}</h3>
                <p className="text-pink-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 bg-pink-50 rounded-lg">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-3">"{testimonial.comment}"</p>
                <p className="text-pink-700 font-medium">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Visit Our Bakery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-pink-700 mb-2">Location</h3>
                <p className="text-gray-600">123 Cake Street</p>
                <p className="text-gray-600">Sweet Town, ST 12345</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-pink-700 mb-2">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-600">Saturday: 10am - 4pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-pink-700 mb-2">Contact</h3>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: hello@sweetdelights.com</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/api/placeholder/400/250" alt="Map to our location" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-pink-100 rounded-lg shadow-md p-8 text-center mb-8">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Ready to Order Your Dream Cake?</h2>
          <p className="text-gray-700 mb-6">Let us create something special for your next celebration!</p>
          <a href="/Orders" className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-md font-medium transition duration-200">
            Place an Order
          </a>
        </div>

        <footer className="text-center text-gray-600 text-sm">
          <p>© 2025 Sweet Delights Cake Shop. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ in Sweet Town</p>
        </footer>
      </div>
    </div>
  );
};

export default About;