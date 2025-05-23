import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-10 py-3 w-max flex gap-x-8 items-center">

      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `relative text-sm font-medium transition-all duration-300 ${
              isActive ? "text-red-500" : "text-white-700 hover:text-red-400"
            }`
          }
        >
          <span className="relative group">
            {item.label}
            <span
              className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-400 transition-all duration-300 group-hover:w-full"
            />
          </span>
        </NavLink>
      ))}

      <NavLink
        to="/create"
        className={({ isActive }) =>
          `ml-4 px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
            isActive
              ? "bg-red-500 text-white border-red-500"
              : "text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
          }`
        }
      >
        + Create
      </NavLink>
    </nav>
  );
};

export default Navbar;
