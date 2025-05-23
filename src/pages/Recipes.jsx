import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipe = data.map((recipe) => (
    <div
      key={recipe.id}
      className="bg-gray-800 text-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={recipe.file}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-red-400">{recipe.title}</h1>
          <span className="ml-2 px-3 py-1 bg-red-600/20 text-red-400 text-xs font-semibold rounded-full">
            {recipe.category}
          </span>
        </div>

        <p className="text-gray-400">
          <span className="font-semibold">Description:</span> {recipe.description}
        </p>
        <p className="text-gray-400">
          <span className="font-semibold">Ingredients:</span> {recipe.ingredient}
        </p>
        <p className="text-gray-400">
          <span className="font-semibold">Instructions:</span> {recipe.instruction}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {renderrecipe}
    </div>
  );
};

export default Recipes;
