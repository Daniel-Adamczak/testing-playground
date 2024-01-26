import { calculateTwoNumbers } from './calculateTwoNumbers';
import { addTwoNumbers } from './addTwoNumbers';
import { subtractTwoNumbers } from './subtractTwoNumbers';
import { divideTwoNumbers } from './divideTwoNumbers';
import { multiplyTwoNumbers } from './multiplyTwoNumbers';

describe('Testing the operation of the calculateTwoNumbers function', () => {
  test('Testing the operation of the calculateTwoNumbers function with operator undefined', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;
    const operator = undefined;

    //Then
    expect(() =>
      calculateTwoNumbers(firstNumber, secondNumber, operator)
    ).toThrow('An operator must be provided for the function to run.');
  });
  test('Testing the operation of the calculateTwoNumbers function with operator defined but of type number', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;
    const operator = 5;

    //Then
    expect(() =>
      calculateTwoNumbers(firstNumber, secondNumber, operator)
    ).toThrow('Operator must be of type string!');
  });

  test('Testing the operation of the calculateTwoNumbers function with operator defined properly but with numeric arguments undefined', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;
    const operator = '*';

    //Then
    expect(() =>
      calculateTwoNumbers(firstNumber, secondNumber, operator)
    ).toThrow(Error);
  });
  test('Testing the operation of the calculateTwoNumbers function with operator defined properly but with numeric arguments undefined', () => {
    //Given
    const firstNumber = undefined;
    const secondNumber = undefined;
    const operator = '+';

    //Then
    expect(() =>
      calculateTwoNumbers(firstNumber, secondNumber, operator)
    ).toThrow(Error);
  });
  test('Testing the operation of the calculateTwoNumbers function with operator defined properly but with numeric arguments of wrong type', () => {
    //Given
    const firstNumber = '3';
    const secondNumber = '9';
    const operator = '/';

    //Then
    expect(() =>
      calculateTwoNumbers(firstNumber, secondNumber, operator)
    ).toThrow(Error);
  });
  test('Testing the operation of the calculateTwoNumbers function with all arguments defined properly', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = 13;
    const operator = '/';

    //Then
    expect(calculateTwoNumbers(firstNumber, secondNumber, operator)).toBe(
      5 / 13
    );
  });
  test('Testing the operation of the calculateTwoNumbers function with all arguments defined properly', () => {
    //Given
    const firstNumber = 5;
    const secondNumber = 13;
    const operator = '*';

    //Then
    expect(calculateTwoNumbers(firstNumber, secondNumber, operator)).toBe(
      5 * 13
    );
  });
});
