import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react"; // Import icons
import Linkkk from "../assets/Linkkk.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <>
      

      {/* Navbar */}
      <nav className="absolute top-[10px] font-kanit z-20 left-0 w-full bg-transparent">
        <div className="container mx-auto flex justify-between items-center px-2 py-3">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={Linkkk} alt="Logo" className="w-10 h-10" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12 pr-8 text-white font-roboto ml-auto">
  <li className="hover:text-green-500 cursor-pointer">
    <Link to="/">Home</Link>
  </li>
  <li className="hover:text-green-500 cursor-pointer">
    <Link to="/about">About Us</Link>
  </li>
  <li className="hover:text-green-500 cursor-pointer">
    <Link to="/fala">FALA</Link>
  </li>
  <li className="hover:text-green-500 cursor-pointer">
    <Link to="/our-impact">Our Impact</Link>
  </li>
  <li className="hover:text-green-500 cursor-pointer">
    <Link to="/media">Media</Link>
  </li>
  <li className="hover:text-green-500 cursor-pointer">
    <Link to="/blog">Blog</Link>
  </li>
</ul>

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="bg-transparent text-white  rounded-lg"
>
          {/* Button (Hidden on small screens) */}
          <button className="hidden md:block bg-[#76B99A] text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
            Give Now
          </button>
          </motion.button>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation (Collapsible Menu) */}
        <div
          className={`md:hidden fixed top-[100px] left-0 w-full bg-[#706FAB] text-white transition-transform transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="text-center py-4 space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">FALA</li>
            <li className="hover:text-gray-300 cursor-pointer">LIN</li>
            <li className="hover:text-gray-300 cursor-pointer">TV</li>
            <li className="hover:text-gray-300 cursor-pointer">Our Impact</li>
            <li className="hover:text-gray-300 cursor-pointer">Media</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            <li>
              <button className="bg-[#76B99A] text-white px-4 py-2 mt-2 rounded-md hover:bg-green-500 transition">
                Give Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
