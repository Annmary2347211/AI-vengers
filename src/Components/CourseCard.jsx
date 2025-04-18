import React from 'react';

const CourseCard = ({ courseName }) => {
  return (
    <div className="course-card">
      <h3>{courseName}</h3>
    </div>
  );
};

export default CourseCard;
