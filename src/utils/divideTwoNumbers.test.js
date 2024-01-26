import { divideTwoNumbers } from './divideTwoNumbers';

describe('Testing the functionality of the divideTwoNumbers function.', () => {
  test('Testing the functionality of the divideTwoNumbers function with two undefined arguments', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;
    //When

    //Then
    expect(() => divideTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });

  test('Testing the operation of the divideTwoNumbers function with one number argument provided and the other undefined', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = undefined;
    //When

    //Then
    expect(() => divideTwoNumbers(firstNumber, secondNumber)).toThrow(
      'For the function to work properly, two arguments must be provided.'
    );
  });
  test('Testing the operation of the divideTwoNumbers function with two numeric arguments, one of the string type and the other of the number type', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = '6';
    //When

    //Then
    expect(() => divideTwoNumbers(firstNumber, secondNumber)).toThrow(
      'At least one given argument is not of type number.'
    );
  });

  test('Testing the function divideTwoNumbers with two numeric arguments, both of which are of type number, but the other is 0, making the equation invalid', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = 0;
    //When

    //Then
    expect(() => divideTwoNumbers(firstNumber, secondNumber)).toThrow(
      'You cannot divide by 0.'
    );
  });

  test('Testing the operation of the divideTwoNumbers function with two numeric arguments, both of which are of type number', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = 2;
    //When
    const sum = divideTwoNumbers(firstNumber, secondNumber);

    //Then
    expect(sum).toBeCloseTo(2.5, 2);
  });
});
