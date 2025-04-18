import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 text-white shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 z-50"
    >
      {/* Logo with glow effect */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-300 neon-text">
        <span className="text-pink-400">⚡</span> AI-Vengers
      </h1>

      {/* Links with cool animations */}
      <div className="space-x-6 flex items-center">
        <Link
          to="/login"
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-md text-sm md:text-base font-medium"
        >
          🔐 Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-md text-sm md:text-base font-medium"
        >
          🚀 Signup
        </Link>
      </div>

      {/* Optional floating emoji sparkle */}
      <motion.div
        className="absolute top-1 right-3 text-yellow-200 text-lg hidden md:block"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ✨
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
