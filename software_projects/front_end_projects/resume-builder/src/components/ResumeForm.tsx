import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateResume } from '../redux/resumeSlice';
import { ResumeState, Education, Experience } from '../types';
import './ResumeForm.scss';

interface ResumeFormProps {
  onSubmit: (data: ResumeState) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResumeState>({
    name: '',
    contact: '',
    education: [],
    experience: [],
    skills: [],
  });

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: keyof ResumeState,
    index?: number,
    field?: string
  ) => {
    const { name, value } = e.target;

    if (section && index !== undefined && field) {
      const updatedSection = (formData[section] as any[]).map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      );
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddField = (section: keyof ResumeState) => {
    const newField =
      section === 'education'
        ? { institution: '', degree: '', year: '' }
        : { company: '', role: '', duration: '' };
    setFormData({
      ...formData,
      [section]: [...(formData[section] as any[]), newField],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    dispatch(updateResume(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <textarea
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Education</h3>
        {formData.education.map((edu, idx) => (
          <div key={idx}>
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => handleChange(e, 'education', idx, 'institution')}
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, 'education', idx, 'degree')}
            />
            <input
              type="text"
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleChange(e, 'education', idx, 'year')}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('education')}>
          Add Education
        </button>
      </div>
      <div>
        <h3>Experience</h3>
        {formData.experience.map((exp, idx) => (
          <div key={idx}>
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(e, 'experience', idx, 'company')}
            />
            <input
              type="text"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleChange(e, 'experience', idx, 'role')}
            />
            <input
              type="text"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => handleChange(e, 'experience', idx, 'duration')}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('experience')}>
          Add Experience
        </button>
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills.join(', ')}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;
