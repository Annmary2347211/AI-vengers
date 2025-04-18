import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/assets/gnAI.jpg')` }} // ✅ from public/assets
    >
      {/* Overlay with gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/60 via-indigo-700/40 to-blue-800/60 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center bg-white bg-opacity-80 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl max-w-xl border-4 border-yellow-300"
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-4"
          >
            🚀 AI-Vengers
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-800 font-medium"
          >
            Generative AI Courses for <span className="text-pink-600 font-semibold">young Master Minds</span> 🌟
          </motion.p>
        </motion.div>

        {/* Floating elements (like sparkles/stars) */}
        <motion.div
          className="absolute top-10 left-10 text-yellow-200 text-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-16 text-pink-200 text-2xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          💡
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-24 text-white text-2xl"
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          🤖
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
