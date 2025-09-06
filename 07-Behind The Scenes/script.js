'use strict';
/*const getAge = function (birthYear) {
  const age = 2025 - birthYear;
  console.log(firstName);
  function Details() {
    console.log(`the name is ${firstName} , age is ${age}`); //hoisting
  }
  Details();
  return age;
};
const firstName = 'Ahmed'; //hoisting
getAge(2001);*/
//----------------------------------------------------------Hoisting && TDZ
/*console.log(_name); // Undeifend
//console.log(age); //cannot access 'age' before initialization
//console.log(city); //Cannot access 'CITY' before initialization
var _name = 'Ahmed';
let age = 24;
const city = 'mahalla';
//------------------------------------------------------------------- function
console.log(getAge(2001)); //24
console.log(getName('Ahmed')); //Cannot access 'getName' before initialization
console.log(getCity('mahalla')); //Cannot access 'getCity' before initialization
function getAge(birthYear) {
  return 2025 - birthYear;
}

let getName = function (_name) {
  return _name;
};

const getCity = city => city;*/
//-------------------------------------------------------------this KeyWord
console.log(this); // window Object
/*function calcAge(birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
}
///arrow Function
var calcAge2 = birthYear => {
  console.log(2025 - birthYear);
  console.log(this); // the parent of this => window Object
};*/
//calcAge2(2001);
const ahmed = {
  _name: 'ahmed',
  age: 24,
  calcYear: function () {
    console.log(this);
    console.log(2025 - this.age);
  },
};
ahmed.calcYear();
const mohamed = {
  _name: 'mohamed',
  age: 323,
};
mohamed.calcYear = ahmed.calcYear; // Method Borrowing
mohamed.calcYear();
