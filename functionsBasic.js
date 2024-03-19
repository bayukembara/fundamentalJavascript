//! Function Declaration

function aboutMe(name, age) {
  const message = `I am ${name} and i am ${age} years old`;
  console.log(message);
}

//! Function Call
aboutMe("bayu", 20);

//! How to make default parameters

function calcSum(number1, number2 = 10, number3 = 10) {
  return number1 + number2 + number3;
}

console.log(calcSum(10));

//! Functions as expression

const calSumExxp = function(number1, number2) {
  let sum = number1 + number2;
  return sum;
};

console.log(calSumExxp(50, 50));

//! Functions arrow
const calSumArr = (number1, number2) => number1 + number2;
console.log(calSumArr(30, 20));

//! Functions as expression

const mulByTwo = function(number1) {
  return number1 * 2;
};

console.log(mulByTwo(6));

//! Functions arrow
const mulByTwoArr = num => {
  return num * 2;
};

console.log(mulByTwoArr(5));

//! Function where the parameter is more than 1

function multiply(...args) {
  console.log(...args);

  let mulp = 1;
  for (let num of args) {
    mulp = mulp * num;
  }
  return mulp;
}

console.log(multiply(2, 3, 4, 5, 9, 8));
