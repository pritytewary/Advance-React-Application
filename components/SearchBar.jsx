import React from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div
      className="relative max-w-2xl mx-auto mb-12"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
      />
    </motion.div>
  );
};

export default SearchBar;
