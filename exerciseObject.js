const user = {
  bayu: 5000,
  faiq: 3000,
  fajar: 3000,
  harits: 3000
};

let total = 0;
let total2 = 0;

for (let key in user) {
  total += user[key];
}

console.log(total);

for (let val of Object.values(user)) {
  total2 += val;
}

console.log(total2);
