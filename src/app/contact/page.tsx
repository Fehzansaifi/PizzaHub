// app/contact/page.js
"use client"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-red-500 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Contact Us
        </h1>
        <p className="text-white text-center mt-4 max-w-2xl mx-auto px-4">
          Have questions about our pizzas? Want to place a large order? We had love to hear from you!
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-md hover:font-bold hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">Visit Our Restaurant</h3>
            <p className="text-gray-700">
              123 Pizza Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Monday: Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 12:00 PM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@pizzarestaurant.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}