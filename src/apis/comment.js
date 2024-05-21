import axios from 'axios';

export const postCommentById = async (id, content) => {
  return await axios.post(`http://3.36.127.43:8080/image${id}/comments`, {
    commentBody: content,
  });
};

export const getCommentListById = async (id) => {
  return await axios.get(`http://3.36.127.43:8080/image${id}/comments`);
};

export const deleteCommentById = async (articleId, commentId) => {
  return await axios.delete(`http://3.36.127.43:8080/image${articleId}/comments/${commentId}`);
};
