"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/OG.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu and scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav
        className="bg-gray-100 p-4 md:p-6 sticky top-0 z-50 shadow-sm"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logo || "/placeholder.svg"}
              alt="myhive Logo"
              className="w-10 h-10 mr-2"
            />
            <button
              onClick={() => handleLinkClick("/")}
              className="text-yellow-600 text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">
                myhive
              </span>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/pricing", label: "Pricing" },
              { to: "/services", label: "Solutions" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <button
                key={link.to}
                onClick={() => handleLinkClick(link.to)}
                className={`text-gray-800 hover:text-yellow-600 transition-colors duration-75 ease-out ${
                  location.pathname === link.to
                    ? "text-yellow-600 font-medium"
                    : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Sign In button */}
          <Link
            to="/login"
            className="hidden sm:inline-block rounded-full bg-yellow-600 px-6 py-3 font-bold text-white transition-colors duration-100 ease-out hover:bg-yellow-500"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div
            className="mobile-menu-container fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-50 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-between h-full p-5">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-yellow-600">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/pricing", label: "Pricing" },
                    { to: "/services", label: "Solutions" },
                    { to: "/careers", label: "Careers" },
                    { to: "/contact", label: "Contact" },
                  ].map((link) => (
                    <button
                      key={link.to}
                      onClick={() => handleLinkClick(link.to)}
                      className={`block w-full text-left py-2 px-3 rounded-lg transition duration-200 ${
                        location.pathname === link.to
                          ? "bg-yellow-50 text-yellow-600 font-medium"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Sign In button at bottom */}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center w-full bg-yellow-600 text-white font-bold py-3 rounded-full hover:bg-yellow-500 transition-colors duration-150"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
