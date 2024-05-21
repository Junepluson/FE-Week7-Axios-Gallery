import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import { styled } from 'styled-components';
import { postCommentById } from '../../apis/comment';

const AddCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

// id props
const AddComment = (props) => {
  const [comment, setComment] = useState('');

  const handleComment = ({ target }) => {
    setComment(target.value);
  };

  const postComment = () => {
    postCommentById(props.id, comment).then(() => window.location.reload());
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') postComment();
  };

  return (
    <>
      <AddCommentWrapper>
        <Input value={comment} onChange={handleComment} placeholder='댓글 작성...' onKeyPress={handleOnKeyPress} />
        <Button type='submit' onClick={postComment}>
          게시
        </Button>
      </AddCommentWrapper>
    </>
  );
};

export default AddComment;
