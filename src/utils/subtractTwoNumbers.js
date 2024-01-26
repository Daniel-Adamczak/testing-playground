export const subtractTwoNumbers = (firstNumber, secondNumber) => {
  if (
    typeof firstNumber === 'undefined' ||
    typeof secondNumber === 'undefined'
  ) {
    throw new Error(
      'For the function to work properly, two arguments must be provided.'
    );
  } else if (
    typeof firstNumber !== 'number' ||
    typeof secondNumber !== 'number'
  ) {
    throw new Error('At least one given argument is not of type number.');
  } else {
    return firstNumber - secondNumber;
  }
};
