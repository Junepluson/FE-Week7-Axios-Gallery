const colors = {
  white: '#ffffff',
  black: '#1B1313',
  gray: '#9c9c9c',
  blue: '#0679C0',
  lightGray: '#f1f1f1',
};

const font = {
  title: `
    font-size: 18px;
    font-weight: 700;
  `,
  largeTitle: `
    font-size: 24px;
    font-weight: 700;
  `,
  small: `
    font-size: 12px;
  `,
  sub: `
    color: ${colors.gray};
  `,
  submit: `
    color: ${colors.blue};
  `,
  bold: `
    font-weight: 700;
  `,
};

const theme = {
  colors,
  font,
};

export default theme;
