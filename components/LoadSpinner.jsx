import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ImSpinner9 className="h-12 w-12 text-gradient-to-r from-blue-600 to-purple-600" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-blue-600 font-medium"
      >
        Loading amazing stories...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
