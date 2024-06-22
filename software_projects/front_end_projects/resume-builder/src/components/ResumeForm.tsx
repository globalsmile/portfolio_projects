import React from 'react';
import { useDispatch } from 'react-redux';
import { updateName, updateContact, addExperience, addEducation, addSkill } from '../features/resume/resumeSlice';

const ResumeForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(e.target.value));
  };

  // Handle other form changes similarly...

  return (
    <div>
      <label>
        Name:
        <input type="text" onChange={handleNameChange} />
      </label>
      {/* Add other form fields similarly */}
    </div>
  );
};

export default ResumeForm;

