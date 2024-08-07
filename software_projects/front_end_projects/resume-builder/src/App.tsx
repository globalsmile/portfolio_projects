import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.scss';
import { ResumeState } from './types';

const App: React.FC = () => {
  const [resume, setResume] = useState<ResumeState>({
    name: '',
    contact: '',
    education: [],
    experience: [],
    skills: [],
  });

  const handleSubmit = (data: ResumeState) => {
    setResume(data);
  };

  return (
    <div className="app">
      <div className="left-side">
        <h1>Resume Builder</h1>
        <p className="instructions">Fill out the form to create your resume</p>
        <ResumeForm onSubmit={handleSubmit} />
      </div>
      <div className="right-side">
        <h1>Resume Preview</h1>
        <ResumePreview resume={resume} />
      </div>
    </div>
  );
};

export default App;
