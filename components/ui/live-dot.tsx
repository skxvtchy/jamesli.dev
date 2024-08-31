import { motion } from "framer-motion";
import React from "react";

// Define the prop types
interface LiveDotProps {
  className?: string;
}

const LiveDot: React.FC<LiveDotProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-center w-5 h-5 bg-gradient-radial from-green-200 to-transparent rounded-full">
        <div className="flex items-center justify-center w-3 h-3 bg-gradient-radial from-green-300 to-transparent rounded-full">
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full shadow-lg"
            animate={{
              scale: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveDot;
