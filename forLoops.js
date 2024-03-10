//? for..in loops

const objs = {
  name: "Bayu",
  age: 20
};

for (let key in objs) {
  console.log(key, objs[key]);
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log("\n In Loops");
for (let index in numbers) {
  console.log(index, numbers[index]);
}

// ? for of loops

console.log("\n Of Loops");
for (let num of numbers) {
  console.log(num);
}
