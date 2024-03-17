let country = `Japan`;

console.log(country);
console.log(typeof country);
console.log(country[0]);
console.log(country.charAt(5));

// ? function string
let message = `Hi my name is Bayu`;
console.log(message);
console.log(message.charAt(3));
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
console.log(message.includes("Bayu"));
console.log(message.startsWith("Hi"));
console.log(message.endsWith("Bayu"));

// ? function part 2

console.log(message.search("is"));
console.log(message.indexOf("Bayu"));
console.log(message.lastIndexOf("Hi"));

// ? function part 3
let temp = 123;
console.log((temp = temp.toString()));
console.log(typeof temp);

let v1 = "Hi";
let v2 = " My Name";
let v3 = " is Bayu";

let complete = v1.concat(v2, v3);
console.log(complete);
console.log(v1 + v2 + v3);

// ? function part 4
console.log(message.split(" "));
console.log(message.slice(0, 4));

console.log(message.substring(0, 4));
console.log(message.substr(0, 4));

// ? Escape Sequence

let anotherMessage = '\tHi Ariyan \\ "It\'s a nice course",\nHow are you?';

console.log(anotherMessage);

// ? String Immutable
let anoMessage = "Japan is Great";

anoMessage = "Indonesia is more greater";

console.log(anoMessage);
