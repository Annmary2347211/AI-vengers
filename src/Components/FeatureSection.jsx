// src/Components/FeaturesSection.jsx
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import genAIImage from '../assets/gnAI2.png';
import presentationImage from '../assets/gnAI.jpg';

const FeaturesSection = () => {
  const [inView, setInView] = useState(false);

  // Scroll trigger for animation
  const handleScroll = () => {
    const section = document.getElementById("features-section");
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="features-section"
      className="w-full bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 py-16 px-4 md:px-8 lg:px-20"
    >
      <div className={`max-w-6xl mx-auto text-center text-white transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-yellow-300">Revolutionize</span> Your Experience with AI & Tech
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-light mb-12">
          Discover cool features crafted to make learning AI fun and futuristic!
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <FeatureCard
          image={genAIImage}
          title="Generative AI Magic"
          subtitle="Make AI create images, stories, and more"
        />
        <FeatureCard
          image={presentationImage}
          title="Presentation Power"
          subtitle="Design cool slides and wow the audience"
          reverse
        />
        <FeatureCard
          image={genAIImage}
          title="Python Coding Fun"
          subtitle="Build games, animations, and apps"
        />
        <FeatureCard
          image={presentationImage}
          title="Website Development"
          subtitle="Build attractive websites using AI"
          reverse
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
