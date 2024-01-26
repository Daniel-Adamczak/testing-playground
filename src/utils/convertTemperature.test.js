import { convertTemperature } from './convertTemperature';

describe('Testing the operation of the subtractTwoNumbers function.', () => {
  test('Testing the operation of the subtractTwoNumbers functionm with incorrect arguments.', () => {
    //Given
    const value = '3';
    const fromUnit = 'exampleString';
    const toUnit = 'secondIrrelevantString';

    //Then
    expect(() => convertTemperature(value, fromUnit, toUnit)).toThrow(
      'Invalid temperature conversion'
    );
  });

  test('Testing the operation of the subtractTwoNumbers functionm with correct arguments.', () => {
    //Given
    const value = 136;
    const fromUnit = 'Celsius';
    const toUnit = 'Fahrenheit';

    //Then
    expect(convertTemperature(value, fromUnit, toUnit)).toBe(
      (value * 9) / 5 + 32
    );
  });

  test('Testing the operation of the subtractTwoNumbers functionm with correct arguments.', () => {
    //Given
    const value = 136;
    const fromUnit = 'Fahrenheit';
    const toUnit = 'Celsius';

    //Then
    expect(convertTemperature(value, fromUnit, toUnit)).toBe(
      ((value - 32) * 5) / 9
    );
  });
});
