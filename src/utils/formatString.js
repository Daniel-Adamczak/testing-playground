export const formatString = (string) => {
  if (typeof string !== 'string') {
    throw new Error('system encountered wrong argument');
  }

  if (string.trim().length <= 2) {
    throw new Error('string should consists of at least 2 characters');
  }

  return string.trim().split('').join(' ');
};
