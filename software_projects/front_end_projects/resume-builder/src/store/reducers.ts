import { combineReducers } from 'redux';
import { ResumeState } from './actions';

const initialState: ResumeState = {
  name: '',
  contact: '',
  education: '',
  experience: '',
  skills: '',
};

const resumeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_RESUME':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  resume: resumeReducer,
});

export default rootReducer;