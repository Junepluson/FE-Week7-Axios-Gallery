import React from 'react';
import { css, styled } from 'styled-components';
import Typo from '../Typo/Typo';

const buttonType = (type) => {
  if (type === 'submit') {
    return css`
      color: ${(props) => props.theme.colors.blue};
      font-weight: 600;
    `;
  }
  if (type === 'sub') {
    return css`
      color: ${(props) => props.theme.colors.gray};
    `;
  }
};

const StyledButton = styled.button`
  padding: 10px 16px;
  width: 76px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  ${(props) => buttonType(props.type)};
`;

const Button = (props) => {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
