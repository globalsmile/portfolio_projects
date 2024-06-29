import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateResume } from '../store/actions';
import './ResumeForm.scss';

type Section = 'name' | 'contact' | 'education' | 'experience' | 'skills';
const ResumeForm: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    education: [{ institution: '', degree: '', year: '' }],
    experience: [{ company: '', role: '', duration: '' }],
    skills: [''],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: Section,
    index?: number,
    field?: string
  ) => {
    const { value } = e.target;
    if (index !== undefined && field) {
      const updatedSection = formData[section].map((item, idx) => {
        if (idx === index) return { ...item, [field]: value };
        return item;
      });
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [section]: value });
    }
  };

  const addField = (section: string) => {
    const newField = section === 'education'
      ? { institution: '', degree: '', year: '' }
      : { company: '', role: '', duration: '' };
    setFormData({ ...formData, [section]: [...formData[section], newField] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateResume(formData));
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <h2>Personal Details</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={(e) => handleChange(e, '')} />
      </div>
      <div className="form-group">
        <label>Contact</label>
        <textarea name="contact" value={formData.contact} onChange={(e) => handleChange(e, '')} />
      </div>

      <h2>Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="form-group">
          <label>Institution</label>
          <input type="text" value={edu.institution} onChange={(e) => handleChange(e, 'education', index, 'institution')} />
          <label>Degree</label>
          <input type="text" value={edu.degree} onChange={(e) => handleChange(e, 'education', index, 'degree')} />
          <label>Year</label>
          <input type="text" value={edu.year} onChange={(e) => handleChange(e, 'education', index, 'year')} />
        </div>
      ))}
      <button type="button" onClick={() => addField('education')}>Add Education</button>

      <h2>Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className="form-group">
          <label>Company</label>
          <input type="text" value={exp.company} onChange={(e) => handleChange(e, 'experience', index, 'company')} />
          <label>Role</label>
          <input type="text" value={exp.role} onChange={(e) => handleChange(e, 'experience', index, 'role')} />
          <label>Duration</label>
          <input type="text" value={exp.duration} onChange={(e) => handleChange(e, 'experience', index, 'duration')} />
        </div>
      ))}
      <button type="button" onClick={() => addField('experience')}>Add Experience</button>

      <h2>Skills</h2>
      {formData.skills.map((skill, index) => (
        <div key={index} className="form-group">
          <label>Skill</label>
          <input type="text" value={skill} onChange={(e) => handleChange(e, 'skills', index)} />
        </div>
      ))}
      <button type="button" onClick={() => addField('skills')}>Add Skill</button>

      <button type="submit">Save Resume</button>
    </form>
  );
};

export default ResumeForm;
