import React from 'react';

const courses = [
  'Generative AI Magic',
  'Presentation Power',
  'Python Coding Fun',
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Explore Courses</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course, index) => (
          <div key={index} className="bg-white text-black px-6 py-4 rounded-xl shadow-md text-center w-60 font-semibold hover:scale-105 transition">
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
