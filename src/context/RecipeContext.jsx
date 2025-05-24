import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used within a RecipeProvider");
  }
  return context;
};

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    const recipeWithId = {
      ...newRecipe,
      id: recipes.length + 1,
      time: `${newRecipe.time} mins`,
    };
    setRecipes((prevRecipes) => [...prevRecipes, recipeWithId]);
  };

  const getRecipeById = (id) => {
    return recipes.find((recipe) => recipe.id === parseInt(id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, getRecipeById }}>
      {children}
    </RecipeContext.Provider>
  );
};
