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
