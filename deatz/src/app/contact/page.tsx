import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf0] text-[#65000b]">
      <Navbar />

      <main className="flex-grow flex items-start justify-center px-4 pt-24">
        {/* Main container */}
        <section className="flex justify-between w-full max-w-7xl gap-12">
          {/* Left Side: Heading */}
          <div className="flex flex-col w-1/2 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-wide">We Want to Hear From You</h1>
            <p className="text-lg lg:text-xl font-light text-gray-700">
              Got questions, comments, or feedback? We’re here to listen and help. Reach out to us below!
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-1/2 bg-[#fffaf0] shadow-lg rounded-lg p-8">
            <form>
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Name (required)
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#65000b]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email (required)
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#65000b]"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message (required)
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#65000b]"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#65000b] text-white font-semibold py-3 rounded-lg hover:bg-[#5B1F1F] transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer with additional spacing */}
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
