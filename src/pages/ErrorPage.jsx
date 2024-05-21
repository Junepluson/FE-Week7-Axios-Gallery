import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Margin from '../components/Margin/Margin';
import realion from '../assets/realion.jpeg';
import Typo from '../components/Typo/Typo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReturnButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Typo title> 멋쟁이 사자가 당신을 기다리고 있습니다 </Typo>
      <Margin height='20'/>
      <img src={realion}></img>
      <Margin height='20'/>
      <div>어흥..</div>
      <Margin height='16' />
      <ReturnButton onClick={() => navigate(-1)}> 뒤돌아서 도망가기!</ReturnButton>
    </Wrapper>
  );
};

export default ErrorPage;
