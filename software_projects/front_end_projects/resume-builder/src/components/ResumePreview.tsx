import React from 'react';
import './ResumePreview.scss';

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
}

interface ResumeState {
  name: string;
  contact: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

const ResumePreview: React.FC<{ resume: ResumeState }> = ({ resume }) => {
  return (
    <div className="preview-container">
      <h1>Resume Preview</h1>
      <h2>{resume.name}</h2>
      <p>{resume.contact}</p>
      <h3>Education</h3>
      {resume.education.map((edu, index) => (
        <div key={index}>
          <p>{edu.institution}</p>
          <p>{edu.degree}</p>
          <p>{edu.year}</p>
        </div>
      ))}
      <h3>Experience</h3>
      {resume.experience.map((exp, index) => (
        <div key={index}>
          <p>{exp.company}</p>
          <p>{exp.role}</p>
          <p>{exp.duration}</p>
        </div>
      ))}
      <h3>Skills</h3>
      {resume.skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};

export default ResumePreview;
