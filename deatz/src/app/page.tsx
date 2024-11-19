import React from 'react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-[#65000b]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#fffaf0] pt-20 pb-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }} // Replace with your actual image
          ></div>
          <div className="relative px-6 md:px-12 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#65000b]">
              Discover the Best Food Deals with Deatz
            </h1>
            <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
              Get exclusive deals, discounts, and promotions from your favorite restaurants—all in one place.
              Save big while enjoying delicious meals!
            </p>
            <a href="/deals" className="mt-8 text-lg font-semibold bg-[#65000b] text-white px-8 py-4 rounded-lg hover:bg-[#ffbc00] transition-all">
              Explore Deals
            </a>
          </div>
        </section>

        {/* App Showcase Section */}
        <section className="py-24 bg-[#fffaf0]">
          <div className="px-6 md:px-12">
            {/* First Image/Text Pair */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 px-6 md:px-12">
              <div className="w-full md:w-1/2 md:order-2 mb-8 md:mb-0">
                <div className="w-full h-64 bg-white shadow-lg rounded-lg"></div> {/* White box placeholder for image */}
              </div>
              <div className="w-full md:w-1/2 md:order-1 text-left md:pl-8">
                <h3 className="text-3xl font-semibold text-[#65000b] mb-4">Track Your Favorite Deals</h3>
                <p className="text-lg text-[#65000b]">
                  Save your favorite food deals and get instant notifications when they’re about to expire, so you never miss out!
                </p>
              </div>
            </div>

            {/* Second Image/Text Pair */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 px-6 md:px-12">
              <div className="w-full md:w-1/2 md:order-1 mb-8 md:mb-0">
                <div className="w-full h-64 bg-white shadow-lg rounded-lg"></div> {/* White box placeholder for image */}
              </div>
              <div className="w-full md:w-1/2 md:order-2 text-left md:pl-8">
                <h3 className="text-3xl font-semibold text-[#65000b] mb-4">Browse Local Offers</h3>
                <p className="text-lg text-[#65000b]">
                  Discover the best deals at your favorite restaurants and eateries in your local area with a few taps.
                </p>
              </div>
            </div>

            {/* Third Image/Text Pair */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 px-6 md:px-12">
              <div className="w-full md:w-1/2 md:order-2 mb-8 md:mb-0">
                <div className="w-full h-64 bg-white shadow-lg rounded-lg"></div> {/* White box placeholder for image */}
              </div>
              <div className="w-full md:w-1/2 md:order-1 text-left md:pl-8">
                <h3 className="text-3xl font-semibold text-[#65000b] mb-4">Instant Alerts for New Deals</h3>
                <p className="text-lg text-[#65000b]">
                  Receive notifications the moment a new deal or promotion becomes available, so you can grab it before it’s gone!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-[#fffaf0]">
          <div className="px-6 md:px-12 text-center">
            <h2 className="text-4xl font-semibold text-[#65000b] mb-8">Why Choose Deatz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white shadow-lg rounded-full mb-6"></div> {/* White box placeholder for icon */}
                <h3 className="text-2xl font-semibold text-[#65000b]">Exclusive Offers</h3>
                <p className="text-lg text-[#65000b] mt-2">Find limited-time offers and promotions at the best eateries in town.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white shadow-lg rounded-full mb-6"></div> {/* White box placeholder for icon */}
                <h3 className="text-2xl font-semibold text-[#65000b]">Instant Notifications</h3>
                <p className="text-lg text-[#65000b] mt-2">Get notified as soon as new deals are available, so you never miss out!</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white shadow-lg rounded-full mb-6"></div> {/* White box placeholder for icon */}
                <h3 className="text-2xl font-semibold text-[#65000b]">Easy to Use</h3>
                <p className="text-lg text-[#65000b] mt-2">Browse, save, and redeem offers in a few simple steps—all from your phone.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#65000b] text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Save Big on Food?</h2>
          <p className="text-xl mb-8">Download the Deatz app today and start exploring the best food deals in town!</p>
          <a href="/download" className="text-lg font-semibold bg-[#ffbc00] text-white px-8 py-4 rounded-lg hover:bg-[#e6a800] transition-all">
            Download the App
          </a>
        </section>
      </main>

      <Footer /> 
    </div>
  );
};

export default MainPage;
