export const updateResume = (data: Partial<ResumeState>) => ({
    type: 'UPDATE_RESUME',
    payload: data,
  });
  
  export interface ResumeState {
    name: string;
    contact: string;
    education: string;
    experience: string;
    skills: string;
  }  