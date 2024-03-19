const user = {
  name: "Bayu",
  email: "bayukembara@gmail.com"
};

// const copiedUser = {};

// copiedUser.name = user.name;
// copiedUser.email = user.email;

// for (let k in copiedUser) {
//   console.log(copiedUser[k]);
// }

// ? second
const copiedUser = Object.assign({}, user);
console.log(copiedUser);
