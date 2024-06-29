import React from 'react';

type Education = {
  institution: string;
  degree: string;
  year: string;
};

type Experience = {
  company: string;
  role: string;
  duration: string;
};

type ResumeState = {
  name: string;
  contact: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
};

const ResumePreview: React.FC<{ resume: ResumeState }> = ({ resume }) => {
  return (
    <div>
      <h1>{resume.name}</h1>
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
      <ul>
        {resume.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={() => alert('Download PDF')}>Download PDF</button>
    </div>
  );
};

export default ResumePreview;
