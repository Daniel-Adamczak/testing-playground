import { subtractTwoNumbers } from './subtractTwoNumbers';

describe('Testing the operation of the subtractTwoNumbers function', () => {
  test('Testing the operation of the subtractTwoNumbers function with both arguments undefined', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;

    //Then
    expect(() => subtractTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });

  test('Testing the operation of the subtractTwoNumbers function with one argument undefined', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = undefined;

    //Then
    expect(() => subtractTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });

  test('Testing the operation of the subtractTwoNumbers function with both arguments defined, one of them of type number and one of them of type string', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = '6';

    //Then
    expect(() => subtractTwoNumbers(firstNumber, secondNumber)).toThrow(
      'At least one given argument is not of type number.'
    );
  });

  test('Testing the operation of the subtractTwoNumbers function with both arguments defined, and both of type number', () => {
    //Given
    const firstNumber = 0.3;
    const secondNumber = -3;

    //Then
    expect(subtractTwoNumbers(firstNumber, secondNumber)).toBe(3.3);
  });
});
