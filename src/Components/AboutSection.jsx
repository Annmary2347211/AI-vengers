import React from 'react';
import '../styles/aboutAnimations.css'; // Make sure to create this file

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br  to-indigo-700 via-purple-700 from-blue-800 py-20 px-4 md:px-12 lg:px-24 overflow-hidden">
      {/* Animated Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6 animate-bounce-slow">
          🚀 What is AI-Vengers?
        </h2>
        <p className="text-lg md:text-xl text-white leading-relaxed font-medium px-4 md:px-0">
          <span className="text-yellow-300 font-semibold">AI-Vengers</span> is a super fun and interactive platform that helps kids explore the amazing world of <span className="font-semibold">Artificial Intelligence</span> 🎓.
          Learn through exciting <span className="font-semibold text-yellow-300">videos</span>, vibrant <span className="font-semibold text-yellow-300">forums</span>, and playful <span className="font-semibold text-yellow-300">AI tools</span> 🌟.
        </p>
        <p className="mt-6 text-lg md:text-xl text-white leading-relaxed font-medium px-4 md:px-0">
          Whether you're into robots 🤖, voice assistants 💬, or self-driving cars 🚗 — this is your launchpad to an AI-powered future full of creativity, curiosity, and fun! 🎉
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
