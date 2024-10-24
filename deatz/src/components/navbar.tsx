import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold">DEATZ</h1>
        <nav className="mt-4 flex space-x-4">
          <a href="/" className="text-lg">Home</a>
          <a href="/about" className="text-lg">About</a>
          <a href="/contact" className="text-lg">Contact</a>
          <a href="/deals" className="text-lg">Deals</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;