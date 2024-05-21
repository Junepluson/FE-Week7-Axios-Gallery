import React from 'react';
import { styled } from 'styled-components';

const ItemHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ListContainer = ({ elements, renderProp }) => (
  <ItemHolder>{elements.map((element) => renderProp(element))}</ItemHolder>
);

export default ListContainer;
