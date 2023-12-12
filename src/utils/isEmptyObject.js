//Added optional chaining operator to avoid TypeError when "obj" is null or undefined.
export const isEmptyObject = (obj) => {
  return obj?.constructor === Object && Object.entries(obj).length === 0;
};
