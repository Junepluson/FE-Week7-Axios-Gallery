import React from 'react';
import Profile from '../components/Profile/Profile';
import Articles from '../components/Articles/Articles';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Profile />
      <Articles />
    </Wrapper>
  );
};

export default MainPage;
