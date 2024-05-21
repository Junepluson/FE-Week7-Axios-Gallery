import axios from 'axios';

export const getArticleList = async () => {
  return await axios.get(`http://3.36.127.43:8080/imageAll`);
};

export const getArticleListLength = async () => {
  return await axios.get(`http://3.36.127.43:8080/imageSize`);
};

// export const getArticleContentsById = (id) => {
//   return axios.post(`${process.env.REACT_APP_API}`);
// };
