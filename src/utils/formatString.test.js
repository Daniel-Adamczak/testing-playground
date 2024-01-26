import { formatString } from './formatString';

describe('Testing the functionality of the formatString function.', () => {
  test('Testing the functionality of the formatString function with string input undefined', () => {
    //Given
    const string = undefined;

    //Then
    expect(() => formatString(string)).toThrow(
      'system encountered wrong argument'
    );
  });

  test('Testing the functionality of the formatString function with string of type number', () => {
    //Given
    const string = 654654;

    //Then
    expect(() => formatString(string)).toThrow(
      'system encountered wrong argument'
    );
  });

  test('Testing the functionality of the formatString function with string of type string but only whitespaces', () => {
    //Given
    const string = '  ';

    //Then
    expect(() => formatString(string)).toThrow(
      'string should consists of at least 2 characters'
    );
  });

  test('Testing the functionality of the formatString function with string of correct type and length', () => {
    //Given
    const string = ' koza ';

    //Then
    expect(formatString(string)).toBe('k o z a');
  });
});
