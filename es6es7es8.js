//! Array and Object Desturcturing

const user = {
  name: "Bayu",
  age: 20,
  address: {
    long: 444.999,
    lat: 2020.99
  }
};

function greeting(user) {
  // destucturing
  const { name, age, address } = user;
  const { long, lat } = address;

  console.log(`Hello ${name},and age ${age} from ${long},${lat}`);
}

greeting(user);

// ES6 Data Structure : SET

let set = new Set();
set.add(100);
set.add(200);
set.add(300);
set.add(100);

console.log(set);
console.log(set.size);

set.delete(100);
console.log(set.size);

for (let el of set) {
  console.log(el);
}

set.forEach(el => console.log(el));

set.clear();
console.log(set);

// ! DATA STRUCTURE MAP

let map = new Map();

map.set("Test1", "Testing");
map.set("Test2", "Testing Two");
map.set("Score", 200);

console.log(map);

for (let m of map) {
  console.log(m);
}

console.log(map.has("Test1"));
map.delete("Score");
console.log(map);
console.log(map.values());
console.log(map.keys());

map.clear();
console.log(map);
