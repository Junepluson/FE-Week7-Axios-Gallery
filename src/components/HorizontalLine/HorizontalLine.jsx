import React from 'react';
import { styled } from 'styled-components';

const Line = styled.div`
  height: 1px;
  width: ${({ width }) => width || '100%'};
  border-top: 1px solid ${(props) => props.theme.colors[props.color] || props.theme.colors.gray};
`;

const HorizontalLine = (props) => {
  return <Line color={props.color} width={props.width} />;
};

export default HorizontalLine;
