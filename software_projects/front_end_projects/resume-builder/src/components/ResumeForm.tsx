import React, { useState } from 'react';

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

const ResumeForm: React.FC = () => {
  const [formData, setFormData] = useState<ResumeState>({
    name: '',
    contact: '',
    education: [{ institution: '', degree: '', year: '' }],
    experience: [{ company: '', role: '', duration: '' }],
    skills: [''],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: keyof ResumeState,
    index?: number,
    field?: keyof Education | keyof Experience
  ) => {
    const { value } = e.target;
    if (index !== undefined && field) {
      const updatedSection = formData[section].map((item: any, idx: number) => {
        if (idx === index) return { ...item, [field]: value };
        return item;
      });
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [section]: value });
    }
  };

  const addNewField = (section: 'education' | 'experience') => {
    const newField = section === 'education'
      ? { institution: '', degree: '', year: '' }
      : { company: '', role: '', duration: '' };
    setFormData({
      ...formData,
      [section]: [...formData[section], newField],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch action or handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e: any) => handleInputChange(e, 'name')}
      />
      <input
        type="text"
        placeholder="Contact"
        value={formData.contact}
        onChange={(e: any) => handleInputChange(e, 'contact')}
      />
      <h3>Education</h3>
      {formData.education.map((edu: { institution: any; degree: any; year: any; }, index: number | undefined) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e: any) => handleInputChange(e, 'education', index, 'institution')}
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e: any) => handleInputChange(e, 'education', index, 'degree')}
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e: any) => handleInputChange(e, 'education', index, 'year')}
          />
        </div>
      ))}
      <button type="button" onClick={() => addNewField('education')}>
        Add Education
      </button>

      <h3>Experience</h3>
      {formData.experience.map((exp: { company: any; role: any; duration: any; }, index: number | undefined) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e: any) => handleInputChange(e, 'experience', index, 'company')}
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e: any) => handleInputChange(e, 'experience', index, 'role')}
          />
          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e: any) => handleInputChange(e, 'experience', index, 'duration')}
          />
        </div>
      ))}
      <button type="button" onClick={() => addNewField('experience')}>
        Add Experience
      </button>

      <h3>Skills</h3>
      <input
        type="text"
        placeholder="Skills (comma-separated)"
        value={formData.skills.join(', ')}
        onChange={(e: { target: { value: string; }; }) =>
          setFormData({ ...formData, skills: e.target.value.split(', ') })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;