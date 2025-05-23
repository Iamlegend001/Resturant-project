import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Image with overlay */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover transform scale-105 transition-transform duration-700 hover:scale-100"
            src="https://images.unsplash.com/photo-1555992457-b8fefdd09069?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Delicious food spread"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover & Share Amazing Recipes
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-delay">
            Join our community of food lovers and share your culinary creations
            with the world
          </p>
          <div className="flex gap-4 animate-fade-in-delay-2">
            <Link
              to="/recipes"
              className="px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Browse Recipes
            </Link>
            <Link
              to="/create"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Create Recipe
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="text-red-500 text-4xl mb-4">🍳</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Easy to Use
              </h3>
              <p className="text-gray-400">
                Create and share your recipes with our intuitive interface
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="text-red-500 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Driven
              </h3>
              <p className="text-gray-400">
                Join a community of passionate food lovers and chefs
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="text-red-500 text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Endless Inspiration
              </h3>
              <p className="text-gray-400">
                Discover new recipes and cooking techniques every day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
