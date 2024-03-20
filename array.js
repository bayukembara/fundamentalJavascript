// ? Simple Array
let friends = ["fajar", "faiq", "harits"];
console.log(friends);
// ? slicing index
console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);
// ? length array
console.log(friends.length);
// ? adding element in array
const number = [1, 2, 3, 4, 5, 6];
const newNumber = [7, 8, 9, 10, 11, 12];
// !adding new element in the 0 index
number.unshift(10, 11, 12);
// !adding new element in the last index
number.push(13, 14, 15);
// !delete specific index and change it with other if need it
number.splice(2, 0, 16, 17, 18);
console.log(number);
// ! remove element from the index 0
// newNumber.shift();
// newNumber.shift();
// ! remove element from the last index
// newNumber.pop();
// newNumber.pop();
// !remove element using splice
newNumber.splice(2, 3);
console.log(newNumber);

// ! Finding element

const anotherNumber = [20, 21, 22, 23, 24, 25, 26, 23];

console.log(anotherNumber.includes(20));
// ! searching index of value
console.log(anotherNumber.indexOf(23));
console.log(anotherNumber.lastIndexOf(23));

// ! Finding Object in array

const doctor = [
  { name: "bayu", age: 20 },
  { name: "hanisah", age: 30 },
  { name: "damayanti", age: 25 }
];

const result = doctor.find(param => {
  return param.name === "damayanti";
});

const resultAge = doctor.find(parma => {
  return parma.age > 20;
});

console.log(result);
console.log(resultAge);

// ! Array Loop / Iterating

const alphabet = ["a", "b", "c", "d", "e", "f", "g"];

for (let i = 0; i < alphabet.length; i++) {
  console.log(i, alphabet[i]);
}

for (let alpha of alphabet) {
  console.log(alpha);
}

alphabet.forEach((alpha, index) => {
  console.log(alpha, index);
});

//! Sorting and Reversing an Array

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
angka.sort();
angka.reverse();
console.log(angka);

let doctors = [{ name: "Bayu", age: 20 }, { name: "Hanisah", age: 25 }];

doctors
  .sort((d1, d2) => {
    if (d1.age > d2.age) return +1;
    if (d1.age === d2.age) return 0;
    if (d1.age < d2.age) return -1;
  })
  .reverse();

console.log(doctors);

const angkas = [6, 7, 3, 2, -1, -2, -3, 9];
const data = angkas.some(ang => {
  return ang > 0;
});
console.log(data);

//! Array method - concat, slice
const num1 = [90, 91, 92, 93];
const num2 = [94, 95, 96, 97];

const nums = num1.concat(num2);
console.log(nums);

const sliceArray = nums.slice(3, 6);
console.log(sliceArray);

//! Spread Operator
console.log(...nums);
console.log(nums[0], nums[1]);
console.log(nums);

const copiedArray = [...nums];
console.log(copiedArray);

console.log(...num1, ...num2);

//! Join Array
let joinArray = num1.join(" ");
console.log(joinArray);

let message = "Hi I am web developer";
const arrayMessage = message.split("");
console.log(arrayMessage.join("-"));

//! Mapping
const mulByTwo = nums.map(numb => {
  return numb * 2;
});

console.log(mulByTwo);

let dokter = [
  { name: "Bayu", age: 20 },
  { name: "Hanisah", age: 20 },
  { name: "Damayanti", age: 20 }
];

// const namaDokter = dokter.map(dok => {
//   return dok.name;
// });
// ? or
const namaDokter = dokter.map(dok => dok.name);

console.log(namaDokter);

//!Filtering Array
const angkaFilter = nums.filter(angs => angs % 2 === 1);

console.log(angkaFilter);

//!Reducing Filter
const reduceSum = nums.reduce((sum, num) => sum + num);
console.log(reduceSum);
