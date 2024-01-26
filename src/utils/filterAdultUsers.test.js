import { filterAdultUsers } from './filterAdultUsers';

describe('Testing the functionality of the filterAdultUsers function.', () => {
  test('Testing the functionality of the filterAdultUsers function with an empty array.', () => {
    //Given
    const users = [];

    //Then
    expect(() => filterAdultUsers(users)).toThrow('List of users is empty');
  });

  test('Testing the functionality of the filterAdultUsers function with an empty object.', () => {
    //Given
    const users = {};

    //Then
    expect(() => filterAdultUsers(users)).toThrow('Wrong format of data');
  });

  test('Testing the functionality of the filterAdultUsers function with an array of mixed ages users.', () => {
    //Given
    const users = [
      { age: 17, name: 'Alice', email: 'alice@example.com', gender: 'female' },
      { age: 22, name: 'Bob', email: 'bob@example.com', gender: 'male' },
      { age: 18, name: 'Carol', email: 'carol@example.com', gender: 'female' },
      { age: 30, name: 'Dave', email: 'dave@example.com', gender: 'male' },
    ];

    //Then
    expect(filterAdultUsers(users)).toEqual([
      { age: 22, name: 'Bob', email: 'bob@example.com', gender: 'male' },
      { age: 18, name: 'Carol', email: 'carol@example.com', gender: 'female' },
      { age: 30, name: 'Dave', email: 'dave@example.com', gender: 'male' },
    ]);
  });
});
