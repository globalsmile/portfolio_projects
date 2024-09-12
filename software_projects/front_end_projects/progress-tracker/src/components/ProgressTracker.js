import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-color: #CCDDEE;
  display: grid;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
  height: 100vh;
`;

const Title = styled.h1`
  color: #b19cd9;
  text-align: center;
`;

const Section = styled.div`
  background-color: #ffffff;
  border: 3px solid grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: 3px solid lightgrey;
`;

const ProgressTracker = () => {
  return (
    <Body>
      <Title>Progress Tracker</Title>
      <div>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <Section key={index}>
            <WeekdayTitle>{day}</WeekdayTitle>
          </Section>
        ))}
      </div>
    </Body>
  );
};

export default ProgressTracker;
