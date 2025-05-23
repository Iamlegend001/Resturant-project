import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snacks",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Quick & Easy",
  "Healthy",
  "Comfort Food",
  "Seafood",
  "Pasta",
  "Salads",
  "Soups",
  "Beverages",
];

const Create = () => {
  const {data ,setdata} =useContext(recipecontext)
  const { register, handleSubmit,reset } = useForm();

  const submitHandler = (recipe) => {
    console.log(recipe);
    recipe.id = nanoid();

    setdata([...data, recipe]);

    reset()
  };
  return (
    <div className="max-w-2xl mx-auto p-20">
      <h1 className="text-3xl font-bold text-white mb-8">Create New Recipe</h1>
      <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Image URL
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            {...register("file")}
            type="url"
            placeholder="Enter Image URL"
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Recipe Title
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            {...register("title")}
            type="text"
            placeholder="Enter recipe title"
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Category
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              {...register("category")}
            >
              <option value="" className="bg-gray-800 text-gray-400">
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <small className="text-red-400">
            This is how error will be shown
          </small>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
            {...register("description")}
            placeholder="Enter recipe description"
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Ingredients
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
            {...register("ingredient")}
            placeholder="Write ingredients separated by comma"
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Instructions
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[150px]"
            {...register("instruction")}
            placeholder="Write instructions separated by comma"
          />
          <small className="text-red-400">
            This is how error will be shown
          </small>
        </div>

        <button
          className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          type="submit"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
