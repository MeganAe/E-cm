import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenue sur MarketPlace Pro
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          La plateforme de commerce en ligne qui connecte vendeurs et acheteurs
        </p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
        >
          Commencer maintenant
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ShoppingBag className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Vente Simplifiée</h3>
          <p className="text-gray-600">
            Créez votre boutique en ligne en quelques clics et commencez à vendre
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Large Communauté</h3>
          <p className="text-gray-600">
            Accédez à une communauté active d'acheteurs et de vendeurs
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Croissance Garantie</h3>
          <p className="text-gray-600">
            Développez votre activité avec nos outils marketing
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Comment ça marche</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inscription</h3>
            <p className="text-gray-600">
              Créez votre compte gratuitement en quelques minutes
            </p>
          </div>
          <div>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Configuration</h3>
            <p className="text-gray-600">
              Personnalisez votre profil et ajoutez vos produits
            </p>
          </div>
          <div>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Vente</h3>
            <p className="text-gray-600">
              Commencez à vendre et développez votre activité
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;