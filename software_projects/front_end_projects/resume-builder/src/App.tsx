import React from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <ResumeForm />
      <ResumePreview />
    </div>
  );
};

export default App;

