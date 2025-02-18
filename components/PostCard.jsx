import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

const PostCard = ({ post }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 h-full flex flex-col justify-between border border-transparent hover:border-blue-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <motion.h2
          className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
          whileHover={{ x: 5 }}
        >
          <Link to={`/item/${post.id}`}>{post.title}</Link>
        </motion.h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
      </div>
      <Link
        to={`/item/${post.id}`}
        className="inline-flex items-center text-blue-500 hover:text-purple-600 transition-colors duration-200 group"
      >
        Read More
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <BiRightArrowAlt className="ml-2 h-5 w-5 group-hover:text-purple-600" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
