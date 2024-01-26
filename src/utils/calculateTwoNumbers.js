/**
 * Napisz funckje która przyjmie 3 parametery
 * pierwsze 2 parametry będą liczbami które chcemy przeliczyć na podstawie 3 parametru
 * który będzie znakiem: + - / *
 * niech funckja calculateTwoNumbers wykorzysta istniejące funckje liczące
 * tj.
 * addTwoNumbers
 * subtractTwoNumbers
 * multiplyTwoNumbers
 * divideTwoNumbers
 *
 *
 */
import { divideTwoNumbers } from './divideTwoNumbers';
import { subtractTwoNumbers } from './subtractTwoNumbers';
import { multiplyTwoNumbers } from './multiplyTwoNumbers';
import { addTwoNumbers } from './addTwoNumbers';
export const calculateTwoNumbers = (firstNumber, secondNumber, operator) => {
  if (typeof operator === 'undefined') {
    throw new Error('An operator must be provided for the function to run.');
  } else if (typeof operator !== 'string') {
    throw new Error('Operator must be of type string!');
  } else if (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
  ) {
    throw new Error('Operator must be choosen from:+,-,*,/');
  } else {
    switch (operator) {
      case '+': {
        return addTwoNumbers(firstNumber, secondNumber);
      }
      case '-': {
        return subtractTwoNumbers(firstNumber, secondNumber);
      }
      case '/': {
        return divideTwoNumbers(firstNumber, secondNumber);
      }
      case '*': {
        return multiplyTwoNumbers(firstNumber, secondNumber);
      }
    }
  }
};
