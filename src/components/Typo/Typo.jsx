import { styled } from 'styled-components';

const StyledTypo = styled.p`
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.weight || 'normal'};

  ${(props) => props.title && props.theme.font.title};
  ${(props) => props.largeTitle && props.theme.font.largeTitle};
  ${(props) => props.small && props.theme.font.small};
  ${(props) => props.sub && props.theme.font.sub};
  ${(props) => props.submit && props.theme.font.submit};
  ${(props) => props.bold && props.theme.font.bold};
`;

const Typo = (props) => <StyledTypo {...props}>{props.children}</StyledTypo>;

export default Typo;
