import React, { useEffect, useState } from 'react';
import SelectedArticle from '../components/SelectedArticle/SelectedArticle';
import { styled } from 'styled-components';
import AddComment from '../components/AddComment/AddComment';
import CommentList from '../components/CommentList/CommentList';
import { useParams } from 'react-router-dom';
import { getArticleList } from '../apis/article';

const ArticleWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// TODO: id를 받아서
const ArticlePage = () => {
  // articleId: Number
  const { articleId } = useParams();

  return (
    <ArticleWrapper>
      <SelectedArticle id={articleId} />
      <AddComment id={articleId} />
      <CommentList id={articleId} />
    </ArticleWrapper>
  );
};

export default ArticlePage;
