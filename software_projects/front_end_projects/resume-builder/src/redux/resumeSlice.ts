// src/redux/resumeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResumeState } from '../types';

const initialState: ResumeState = {
  name: '',
  contact: '',
  education: [],
  experience: [],
  skills: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<ResumeState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateResume } = resumeSlice.actions;
export default resumeSlice.reducer;

