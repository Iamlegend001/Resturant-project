import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <Navbar />
        <main className="pt-24">
          <MainRoutes />
        </main>
      </div>
    </div>
  );
};

export default App;
