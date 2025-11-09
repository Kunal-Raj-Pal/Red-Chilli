import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `px-4 py-2 font-semibold hover:text-red-500 ${
      isActive ? "text-red-500" : "text-gray-800"
    }`;

  return (
     <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500 flex items-center">
         Red Chilli
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/menu" className={linkClass}>
            Menu
          </NavLink>
          <NavLink to="/book" className={linkClass}>
            Book
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-red-500"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/book"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Book
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
