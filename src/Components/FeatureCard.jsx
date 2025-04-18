import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FeatureCard = ({ image, title, subtitle, reverse }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-6 py-10`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-48 object-cover rounded-lg shadow-md"
      />
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white font-semibold">{subtitle}</p>
        <button className="bg-purple-800 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">
          Explore
        </button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
