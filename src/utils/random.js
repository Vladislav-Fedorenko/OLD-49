export const r = ({ a, b } = {}) => {
  a = a || 0;
  b = b || 100;
  return Math.floor(a + Math.random() * b);
};
