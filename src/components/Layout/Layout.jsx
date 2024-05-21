import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const BackGround = styled.div`
  width: 768px;
  background-color: white;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Layout = () => {
  return (
    <BackGround>
      <Outlet />
    </BackGround>
  );
};

export default Layout;
