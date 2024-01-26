import { addTwoNumbers } from './addTwoNumbers';

describe('Testing the functionality of the addTwoNumbers function.', () => {
  test('Testing the functionality of the addTwoNumbers function with two undefined arguments', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;
    //When

    //Then
    expect(() => addTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });

  test('Testing the operation of the addTwoNumbers function with one number argument provided and the other undefined', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = undefined;
    //When

    //Then
    expect(() => addTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });
  test('Testing the operation of the addTwoNumbers function with two numeric arguments, one of the string type and the other of the number type', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = '6';
    //When

    //Then
    expect(() => addTwoNumbers(firstNumber, secondNumber)).toThrow(
      'At least one given argument is not of type number.'
    );
  });
  test('Testing the operation of the addTwoNumbers function with two numeric arguments, both of which are of type number', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = 6;
    //When
    const sum = addTwoNumbers(firstNumber, secondNumber);

    //Then
    expect(sum).toBe(11);
  });
});
