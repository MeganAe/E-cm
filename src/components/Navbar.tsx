import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Store className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MarketPlace Pro</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-700 hover:text-blue-600">Produits</Link>
            <Link to="/guide" className="text-gray-700 hover:text-blue-600">Guide</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;