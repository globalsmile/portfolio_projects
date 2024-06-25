import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ResumePreview.scss';

const ResumePreview: React.FC = () => {
  const resume = useSelector((state: RootState) => state.resume);

  const handleDownload = () => {
    const input = document.getElementById('resume-preview');
    if (input) {
      html2canvas(input).then((canvas: { toDataURL: (arg0: string) => any; width: any; height: any; }) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('resume.pdf');
      });
    }
  };

  return (
    <div className="resume-preview" id="resume-preview">
      <h2>{resume.name}</h2>
      <p>{resume.contact}</p>
      
      <h3>Education</h3>
      {resume.education.map((edu: { institution: any; degree: any; year: any; }, index: any) => (
        <div key={index}>
          <p>{edu.institution}</p>
          <p>{edu.degree}</p>
          <p>{edu.year}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {resume.experience.map((exp: { company: any; role: any; duration: any; }, index: any) => (
        <div key={index}>
          <p>{exp.company}</p>
          <p>{exp.role}</p>
          <p>{exp.duration}</p>
        </div>
      ))}

      <h3>Skills</h3>
      <ul>
        {resume.skills.map((skill: any, index: any) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default ResumePreview;
