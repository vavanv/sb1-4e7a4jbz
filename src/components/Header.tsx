import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">bod.</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">Functional Drinks</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Our Story</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Facts</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Stockists</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Wholesale Enquiries</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-green-600">More</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-green-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;