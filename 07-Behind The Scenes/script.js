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
};
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
//-------------------------------------reglar fun vs arrow fun
const car = {
  _name: 'BMW',
  model: 2020,
  year: function () {
    console.log(this); //car object
    const color = function () {
      console.log('red');

      console.log(this); // undeifend
    };
    color();
  },
  print: () => {
    console.log(this);
    console.log(`this is car`);
  },
};
car.year();
car.print();*/
//----------------------------------------primitive vs Refernce
let age = 10;
let age2 = age;
console.log('Before' + 'age is ' + age + 'and age 2 is ' + age2);
age = 30;
console.log('Before' + 'age is ' + age + 'and age 2 is ' + age2); // age 2 not change because the value in Stack
// Refernce
const object1 = {
  _name: 'Ahmed',
  age: 24,
};
const object2 = object1;
console.log('Before object 1', object1);
console.log('object2 ', object2);
object2.city = 'cairo';
// the Both Change Because they refernce to the Same address in Ram
console.log('After object 1', object1);
console.log('object2 ', object2);
// to make an copy of it Use a Method Assign => make an
const object3 = Object.assign({}, object1);
object1.num = 123;
console.log(object1);
console.log(object3);
