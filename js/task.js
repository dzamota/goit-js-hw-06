'use strict';

import { users } from './users.js';

// Task 1

const getUserNames = users => users.map(item => item.name);

console.log(getUserNames(users));

// Task 2

const getUsersWithEyeColor = (users, color) => users.filter(item => item.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

// Task 3

const getUsersWithGender = (users, gender) =>
  users.filter(item => item.gender === gender).map(item => item.name);

console.log(getUsersWithGender(users, 'male'));

// Task 4

const getInactiveUsers = users => users.filter(item => !item.isActive);

console.log(getInactiveUsers(users));

// Task 5

const getUserWithEmail = (users, email) => users.find(item => item.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// Task 6

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age <= max && age >= min);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// Task 7

const calculateTotalBalance = users => users.reduce((acc, item) => acc + item.balance, 0);

console.log(calculateTotalBalance(users));

// Task 8

const getUsersWithFriend = (users, friendName) =>
  users.filter(item => item.friends.some(indx => indx === friendName)).map(item => item.name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// Task 9

const getNamesSortedByFriendsCount = users => {
  const sortedByFriends = [...users];
  sortedByFriends.sort(
    (currItem, anotherItem) => currItem.friends.length - anotherItem.friends.length
  );
  return sortedByFriends.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// Task 10

const getSortedUniqueSkills = users => {
  const arrOfSkills = users.reduce((acc, item) => [...acc, ...item.skills], []);
  arrOfSkills.sort();
  return arrOfSkills.reduce((acc, item) => (!acc.includes(item) ? [...acc, item] : acc), []);
};

console.log(getSortedUniqueSkills(users));
