import React from 'react';

const ProductSection = () => {
  return (
    <div className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&q=80"
              alt="Kombucha Bottle"
              className="w-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -top-8 left-4">
              <img
                src="https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?auto=format&fit=crop&q=80"
                alt="Lime"
                className="w-24 h-24 object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="absolute bottom-4 right-8">
              <img
                src="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?auto=format&fit=crop&q=80"
                alt="Apple"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">Real Kombucha</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From the moment of our existence our body becomes the vessel through which we
              experience life. Bodies hold the keys to the kingdom. They allow us to love and be
              loved, laugh and make laugh, see the world, change the world... start the cycle anew.
            </p>
            <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;