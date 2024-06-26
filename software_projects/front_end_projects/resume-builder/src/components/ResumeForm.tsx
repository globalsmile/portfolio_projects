import React from 'react';
import { useDispatch } from 'react-redux';
import { updateResume } from '../store/actions';
import './ResumeForm.scss';

const ResumeForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateResume({ [name]: value }));
  };

  return (
    <form className="resume-form">
      <label>
        First Name:
        <input type="text" name="fname" onChange={handleChange} />
      </label>
      <label>
        Middle Name:
        <input type="text" name="mname" onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lname" onChange={handleChange} />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" onChange={handleChange} />
      </label>
      <label>
        Education:
        <textarea name="education" onChange={handleChange}></textarea>
      </label>
      <label>
        Experience:
        <textarea name="experience" onChange={handleChange}></textarea>
      </label>
      <label>
        Skills:
        <textarea name="skills" onChange={handleChange}></textarea>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default ResumeForm;