export const filterAdultUsers = (users) => {
  if (!Array.isArray(users)) {
    throw new Error('Wrong format of data');
  }

  if (users.length === 0) {
    throw new Error('List of users is empty');
  }

  return users.filter(({ age }) => age >= 18);
};
