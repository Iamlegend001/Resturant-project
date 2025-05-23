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
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    console.log(recipe);
    recipe.id = nanoid();
    setdata([...data, recipe]);
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-20">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Recipe inspiration"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h2 className="text-2xl font-bold text-white mb-2">
                Create Your Recipe
              </h2>
              <p className="text-gray-200">
                Share your culinary masterpiece with the world
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Recipe Title
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    {...register("title")}
                    type="text"
                    placeholder="Enter recipe title"
                    required
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                      {...register("category")}
                      required
                    >
                      <option value="" className="bg-gray-800 text-gray-400">
                        Select a category
                      </option>
                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-gray-800"
                        >
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
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Image URL
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  {...register("file")}
                  type="url"
                  placeholder="Enter Image URL"
                  required
                />
                <small className="text-red-400">
                  This is how error will be shown
                </small>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none"
                  {...register("description")}
                  placeholder="Enter recipe description"
                  required
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none"
                  {...register("ingredient")}
                  placeholder="Write ingredients separated by comma"
                  required
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[150px] resize-none"
                  {...register("instruction")}
                  placeholder="Write instructions separated by comma"
                  required
                />
                <small className="text-red-400">
                  This is how error will be shown
                </small>
              </div>

              <button
                className="w-full bg-red-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-[1.02] active:scale-[0.98]"
                type="submit"
              >
                Create Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
