import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto"; // prevent scroll when open
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Tours", path: "/tours" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#243643] text-white">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 h-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9aa04f] font-semibold"
                    : "hover:text-[#9aa04f] transition-colors duration-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons + Mobile Icon */}
        <div className="flex items-center space-x-3">
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="border border-white text-white px-3 py-1 text-sm rounded-md hover:bg-white hover:text-[#243643] transition">
              Login
            </button>
            <button className="bg-[#9aa04f] text-white px-3 py-1 text-sm rounded-md hover:bg-[#7f853f] transition">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#243643] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full p-8 space-y-6 text-lg font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#9aa04f] font-bold block"
                  : "hover:text-[#9aa04f] transition-colors duration-200 block"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="flex flex-col space-y-3 mt-6">
            <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#243643] transition">
              Login
            </button>
            <button className="bg-[#9aa04f] px-4 py-2 rounded-md hover:bg-[#7f853f] transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
