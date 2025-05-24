import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Foodie
            </span>
          </NavLink>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-amber-600"
                      : "text-gray-600 hover:text-amber-600"
                  }`
                }
              >
                <span className="relative group">
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </NavLink>
            ))}
          </div>

          {/* Create Button - Desktop */}
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `hidden md:block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white"
              }`
            }
          >
            + Create Recipe
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button md:hidden p-2 rounded-md text-gray-600 hover:text-amber-600 hover:bg-amber-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-amber-100 text-amber-600"
                    : "text-gray-600 hover:bg-amber-50 hover:text-amber-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/create"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white"
              }`
            }
          >
            + Create Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
