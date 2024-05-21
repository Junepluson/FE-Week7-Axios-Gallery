import React, { useEffect, useState } from 'react';
import ListContainer from '../ListContainer/ListContainer';
import Comment from '../Comment/Comment';
import { styled } from 'styled-components';
import { getCommentListById } from '../../apis/comment';

const CommentListWrapper = styled.div`
  padding-top: 14px;
  width: 100%;
  padding-bottom: 50px; // 여유 공간
`;

const CommentList = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentListById(props.id).then((res) => setComments(res.data));
  }, []);

  return (
    <CommentListWrapper>
      <ListContainer
        elements={comments}
        renderProp={(element) => (
          <Comment articleId={props.id} id={element.id}>
            {element.commentBody}
          </Comment>
        )}
      />
    </CommentListWrapper>
  );
};

export default CommentList;
