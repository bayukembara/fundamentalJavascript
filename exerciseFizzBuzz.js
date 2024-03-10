let howMany = 100;

// for (let i = 1; i < howMany + 1; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// ? Ternary

for (let i = 1; i < howMany + 1; i++) {
  console.log(
    i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i
  );
}
