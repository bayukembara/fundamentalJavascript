const user = {
  name: "Bayu",
  email: "bayukembara@gmail.com"
};

const jsonData = JSON.stringify(user);

console.log("OBJECT DATA");
console.log(user);
console.log("JSON DATA");
console.log(jsonData);
console.log("JSON DATA TO OBJECT DATA");
console.log(JSON.parse(jsonData));
