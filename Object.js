// ? Javascript Object

let name = "Bayu";
let age = 28;
let hobby = "Reading";

const user = {
  name: "Bayu",
  age: 28,
  hobby: "Reading",
  isMarried: true,
  friends: ["Fajar", "Faiq"],
  selectColor: null,
  calculateAge: function() {
    console.log(`I am ${this.age} Bayu Kembara`);
  }
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.hobby);
console.log(user["name"]);
console.log(user["age"]);
console.log(user["hobby"]);

// ? Modifying Object
// ! add object
user.email = "bayu@gmail.com";
user["phone"] = "085733008599";
console.log(user);

// ! update object
user.isMarried = false;
user.age = user.age + 1;
console.log(user);

// ! delete object
delete user.email;
console.log(user);

// ? Method and Keyword
user.calculateAge();

// ? Traversing Object

// ! Getting Key

const anotherUser = {
  name: "Bayu",
  age: 28,
  sex: "Male",
  phone: "085733008599",
  email: "bayu@gmail.com"
};

// ! first
for (const key in anotherUser) {
  console.log(key, anotherUser[key]);
}

// ! second
console.log(Object.keys(user));
console.log(Object.values(user));
