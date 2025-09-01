'use strict';
const getAge = function (birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  function Details() {
    console.log(`the name is ${firstName} , age is ${age}`); //hoisting
  }
  Details();
  return age;
};
const firstName = 'Ahmed'; //hoisting
getAge(2001);
