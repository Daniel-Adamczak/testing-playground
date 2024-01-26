import { multiplyTwoNumbers } from './multiplyTwoNumbers';

describe('Testing the operation of the multiplyTwoNumbers function', () => {
  test('Testing the operation of the multiplyTwoNumbers function with two undefined arguments ', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;

    //Then
    expect(() => multiplyTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });

  test('Testing the operation of the multiplyTwoNumbers function with one undefined argument ', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = undefined;

    //Then
    expect(() => multiplyTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });
  test('Testing the operation of the multiplyTwoNumbers function with two numeric arguments, and one of them of type string ', () => {
    //Given
    const firstNumber = '3';
    const secondNumber = 5;

    //Then
    expect(() => multiplyTwoNumbers(firstNumber, secondNumber)).toThrow(
      'At least one given argument is not of type number.'
    );
  });

  test('Testing the operation of the multiplyTwoNumbers function with two numeric arguments, both of type number ', () => {
    //Given
    const firstNumber = 3;
    const secondNumber = 5;

    //Then
    expect(multiplyTwoNumbers(firstNumber, secondNumber)).toBe(15);
  });
});
