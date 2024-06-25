import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './ResumePreview.scss';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResumePreview: React.FC = () => {
  const resume = useSelector((state: RootState) => state.resume);

  const handleDownload = () => {
    const input = document.getElementById('resume-preview');
    if (input) {
      html2canvas(input).then((canvas: { toDataURL: (arg0: string) => any; width: number; height: number; }) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * 0.75, canvas.height * 0.75);
        pdf.save('resume.pdf');
      });
    }
  };

  return (
    <div className="resume-preview" id="resume-preview">
      <h2>{resume.name}</h2>
      <p>{resume.contact}</p>
      <h3>Education</h3>
      <p>{resume.education}</p>
      <h3>Experience</h3>
      <p>{resume.experience}</p>
      <h3>Skills</h3>
      <p>{resume.skills}</p>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default ResumePreview;