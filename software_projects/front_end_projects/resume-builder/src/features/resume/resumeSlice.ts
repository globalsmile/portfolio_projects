import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResumeState {
  name: string;
  contact: string;
  experience: Array<{ company: string; role: string; duration: string }>;
  education: Array<{ institution: string; degree: string; year: string }>;
  skills: string[];
}

const initialState: ResumeState = {
  name: '',
  contact: '',
  experience: [],
  education: [],
  skills: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    updateContact(state, action: PayloadAction<string>) {
      state.contact = action.payload;
    },
    addExperience(state, action: PayloadAction<{ company: string; role: string; duration: string }>) {
      state.experience.push(action.payload);
    },
    addEducation(state, action: PayloadAction<{ institution: string; degree: string; year: string }>) {
      state.education.push(action.payload);
    },
    addSkill(state, action: PayloadAction<string>) {
      state.skills.push(action.payload);
    },
  },
});

export const { updateName, updateContact, addExperience, addEducation, addSkill } = resumeSlice.actions;
export default resumeSlice.reducer;

