import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-5 bg-slate-200 ">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-black">MyWebsite</div>
        <div className="hidden space-x-4 md:flex">
          <a href="#" className="font-semibold text-black hover:text-cyan-400">
            Home
          </a>
          <a href="#" className="font-semibold text-black hover:text-cyan-400">
            About
          </a>
          <a href="#" className="font-semibold text-black hover:text-cyan-400">
            Services
          </a>
          <a href="#" className="font-semibold text-black hover:text-cyan-400">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col mt-4 space-y-2 md:hidden"
        >
          <a href="#" className="font-semibold text-black">
            Home
          </a>
          <a href="#" className="font-semibold text-black">
            About
          </a>
          <a href="#" className="font-semibold text-black">
            Services
          </a>
          <a href="#" className="font-semibold text-black">
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
