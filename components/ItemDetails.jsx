import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiLeftArrowAlt } from "react-icons/bi";
import axios from "axios";
import LoadingSpinner from "./LoadSpinner";

const ItemDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!post) return <div>Post not found</div>;

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div whileHover={{ x: -5 }} className="inline-block">
        <Link
          to="/"
          className="inline-flex items-center text-blue-500 hover:text-purple-600 mb-6 transition-colors duration-200"
        >
          <BiLeftArrowAlt className="mr-2 h-5 w-5" />
          Back to Posts
        </Link>
      </motion.div>
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          {post.title}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
      </motion.div>
    </motion.div>
  );
};

export default ItemDetails;
