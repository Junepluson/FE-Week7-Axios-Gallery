import React from 'react';
import Typo from '../Typo/Typo';
import { styled } from 'styled-components';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import Margin from '../Margin/Margin';
import { deleteCommentById } from '../../apis/comment';

const CommentWrapper = styled(Flex)`
  justify-content: space-between;
  padding-left: 16px;
`;

const CommentSubWrapper = styled(Flex)``;

const Comment = ({ articleId, id, children }) => {
  const deleteComment = () => {
    deleteCommentById(articleId, id).then(() => {
      window.location.reload();
    });
  };

  return (
    <CommentWrapper>
      <CommentSubWrapper>
        <Typo bold>익명</Typo>
        <Margin width='12' />
        <Typo>{children}</Typo>
      </CommentSubWrapper>
      <Button type='sub' onClick={deleteComment}>
        삭제
      </Button>
    </CommentWrapper>
  );
};

export default Comment;
