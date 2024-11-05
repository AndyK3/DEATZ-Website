import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-[#5B1F1F] text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <h1 className="text-3xl font-bold tracking-widest">DEATZ</h1>
        <nav className="flex items-center mx-auto">
          <a href="/" className="text-lg hover:opacity-80 transition-opacity px-4">Home</a>
          <span className="border-l border-gray-400 h-4 mx-2"></span>
          <a href="/about" className="text-lg hover:opacity-80 transition-opacity px-4">About</a>
          <span className="border-l border-gray-400 h-4 mx-2"></span>
          <a href="/contact" className="text-lg hover:opacity-80 transition-opacity px-4">Contact</a>
          <span className="border-l border-gray-400 h-4 mx-2"></span>
          <a href="/deals" className="text-lg hover:opacity-80 transition-opacity px-4">Deals</a>
        </nav>
        <div className="flex items-center">
          <a href="/signin" className="bg-white text-[#5B1F1F] font-semibold rounded-full px-6 py-2 hover:bg-gray-200 transition-all">
            Log In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
