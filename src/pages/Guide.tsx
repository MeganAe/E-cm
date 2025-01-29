import React from 'react';
import { CheckCircle } from 'lucide-react';

const Guide = () => {
  const marketingImages = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    // ... ajoutez 12 autres images marketing
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Guide d'utilisation</h1>
      
      {/* Section Étapes */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Comment utiliser la plateforme</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-medium mb-2">1. Créez votre compte</h3>
              <p className="text-gray-600">
                Inscrivez-vous gratuitement et complétez votre profil professionnel
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-medium mb-2">2. Configurez votre boutique</h3>
              <p className="text-gray-600">
                Personnalisez votre espace de vente et ajoutez vos premiers produits
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-medium mb-2">3. Gérez vos ventes</h3>
              <p className="text-gray-600">
                Suivez vos commandes et interagissez avec vos clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Marketing */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Exemples de réussite</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={`Marketing example ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-lg mb-2">Histoire de réussite #{index + 1}</h3>
                <p className="text-gray-600">
                  Découvrez comment nos vendeurs réussissent sur notre plateforme
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;