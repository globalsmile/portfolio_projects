import React, { useState } from 'react';
import './ResumeForm.scss';

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

const ResumeForm: React.FC<{ onSubmit: (data: ResumeState) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResumeState>({
    name: '',
    contact: '',
    education: [],
    experience: [],
    skills: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section?: keyof ResumeState,
    index?: number,
    field?: string
  ) => {
    const { value } = e.target;
    if (section && index !== undefined && field) {
      const updatedSection = formData[section].map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      );
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [e.target.name]: value });
    }
  };

  const addField = (section: keyof ResumeState) => {
    const newField =
      section === 'education'
        ? { institution: '', degree: '', year: '' }
        : { company: '', role: '', duration: '' };
    setFormData({ ...formData, [section]: [...formData[section], newField] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up Form</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contact"
      />
      {/* Add education, experience, and skills fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;
