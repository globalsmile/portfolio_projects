import React from 'react';
import ProgressTracker from './components/ProgressTracker';
import styled from 'styled-components';

const divStyle = styled.div`
  dbackground-color: #CCDDEE;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
`;
function App() {
  return (
    <divStyle>
      <ProgressTracker />
    </divStyle>
  );
}

export default App;
