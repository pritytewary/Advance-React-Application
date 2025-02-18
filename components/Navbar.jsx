import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiBookHeart } from "react-icons/bi";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <BiBookHeart className="h-8 w-8 text-gradient-to-r from-blue-600 to-purple-600" />
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BlogSpace
          </span>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
