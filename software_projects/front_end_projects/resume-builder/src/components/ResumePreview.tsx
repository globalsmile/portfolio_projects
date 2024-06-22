import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ResumePreview: React.FC = () => {
  const resume = useSelector((state: RootState) => state.resume);

  return (
    <div>
      <h1>{resume.name}</h1>
      <p>{resume.contact}</p>
      {/* Render experience, education, and skills similarly */}
    </div>
  );
};

export default ResumePreview;

