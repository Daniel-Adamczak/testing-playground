import { filterNumbers } from './filterNumbers';

describe('Testing the functionality of the filterNumbers function.', () => {
  test('Testing the functionality of the filterNumbers function with arguments undefined', () => {
    //Given
    const characters = undefined;

    //Then
    expect(() => filterNumbers(characters)).toThrow(
      'Input argument must be defined.'
    );
  });
  test('Testing the functionality of the filterNumbers function with arguments of wrong type', () => {
    //Given
    const characters = 8;

    //Then
    expect(() => filterNumbers(characters)).toThrow(
      'Input argument must be an array.'
    );
  });

  test('Testing the functionality of the filterNumbers function with arguments of correct type', () => {
    //Given
    const characters = ['d', 'y', 7, 't', 6, { p: 'y' }, [5, 'k'], 'e', 4, 3];

    //Then
    expect(filterNumbers(characters)).toEqual([7, 6, 4, 3]);
  });
});
