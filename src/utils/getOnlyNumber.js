export const getOnlyNumber = (str) => {
  const regex = /[^0-9]/g;
  return parseInt(str.replace(regex, ''));
};
