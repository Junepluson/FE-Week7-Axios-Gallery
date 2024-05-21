import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';
import { useNavigate } from 'react-router-dom';
import Flex from '../Flex/Flex';
import { getArticleList } from '../../apis/article';
import { getOnlyNumber } from '../../utils/getOnlyNumber';

const ArticleWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: start;
  margin: 5px;
  cursor: pointer;

  overflow: hidden;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ArticleTextWrapper = styled.div`
  width: 100%;
`;

const ArticleText = styled(Typo)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Article = (props) => {
  const navigate = useNavigate();

  const moveToArticlePage = () => {
    const articleId = getOnlyNumber(props.id);

    navigate(`/article/${articleId}`);
  };

  return (
    <ArticleWrapper onClick={moveToArticlePage}>
      <ArticleImage src={props.image} />
      <Margin height='10' />
      <ArticleTextWrapper>
        <ArticleText title>{props.title}</ArticleText>
        <Margin height='3' />
        <ArticleText color='gray'>{props.contents}</ArticleText>
      </ArticleTextWrapper>
      <Margin height='5' />
    </ArticleWrapper>
  );
};

export default Article;
