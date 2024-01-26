export const filterNumbers = (characters) => {
  if (typeof characters === 'undefined') {
    throw new Error('Input argument must be defined.');
  } else if (!Array.isArray(characters)) {
    throw new Error('Input argument must be an array.');
  }
  return characters.filter((char) => typeof char === 'number');
};
