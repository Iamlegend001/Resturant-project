import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </RecipeProvider>
  </React.StrictMode>
);
