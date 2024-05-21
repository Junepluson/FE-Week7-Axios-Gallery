import React, { useEffect, useState } from 'react';
import Article from './Article';
import { styled } from 'styled-components';
import { getArticleList } from '../../apis/article';
import axios from 'axios';

const ArticlesWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticleList().then((res) => setArticleList(res.data));
  }, []);

  return (
    <ArticlesWrapper>
      {articleList.length === 0 ? (
        <div>로딩중</div>
      ) : (
        articleList.map((article) => (
          <Article image={article.imageURL} title={article.imageName} contents={article.imageText} id={article.id} />
        ))
      )}
    </ArticlesWrapper>
  );
};

export default Articles;
