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
    <div>
      <p>{resume.contact}</p>
      <h3>Education</h3>
      {resume.education.map((edu) => (
        <div key={edu.institution}>
          <p>{edu.institution}</p>
          <p>{edu.degree}</p>
          <p>{edu.year}</p>
        </div>
      ))}
      <h3>Experience</h3>
      {resume.experience.map((exp) => (
        <div key={exp.company}>
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
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};
export default ResumePreview;