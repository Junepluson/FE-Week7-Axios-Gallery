import styled, { css } from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export default Flex;
