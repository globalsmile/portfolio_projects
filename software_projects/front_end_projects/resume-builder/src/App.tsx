import React from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="form-container">
        <h1>Resume Builder</h1>
        <p className="instructions">Fill out the form to create your resume</p>
        <ResumeForm />
        </div>
      <div className="preview-container">
        <h1>Resume Preview</h1>
        <ResumePreview />
        </div>
      </div>
  );
};

export default App;

