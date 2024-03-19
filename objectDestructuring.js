const user = {
  name: "Bayu",
  age: 20,
  favbook: {
    bookname: "Psychology of Money",
    bookauthor: "Morgan Housel"
  }
};

// destructuring
const { name, age, favbook } = user;
const { bookname, bookauthor } = favbook;

console.log(name);
console.log(age);
console.log(favbook);
console.log(bookauthor);
