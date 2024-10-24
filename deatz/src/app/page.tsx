// src/MainPage.js
import React from 'react';
import Navbar from '../components/navbar'; 

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <section className="relative pb-32">
          <div className="px-3 flex flex-row justify-center">
            <div className="px-14 pt-32 max-w-2/3 text-gray-800">
              <h1 className="text-9xl uppercase font-semibold tracking-tighter">Ongoing Food Deals.</h1>
              <div className="pt-16 flex flex-row justify-between">
                <p className="w-1/3 font-semibold uppercase">DEATZ</p>
                <p className="w-2/5">
                  Stay informed on the latest food deals, promotions, discounts, and community insights 
                  surrounding your favorite restaurants and eateries. For more news articles, go to our 
                  <a href="/" className="underline"> deals page</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 DEATZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
