import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3",
      time: "30 mins",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Creamy Mushroom Pasta",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3",
      time: "25 mins",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Chocolate Lava Cake",
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3",
      time: "45 mins",
      difficulty: "Hard",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Discover & Share Amazing Recipes
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">
            Join our community of food lovers and explore thousands of delicious
            recipes
          </p>
          <Link
            to="/recipes"
            className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            Explore Recipes
          </Link>
        </div>
      </div>

      {/* Featured Recipes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-white/90 text-sm">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {recipe.time}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="inline-block w-full text-center px-4 py-2 bg-amber-100 text-amber-600 rounded-full font-medium hover:bg-amber-200 transition-colors duration-300"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
