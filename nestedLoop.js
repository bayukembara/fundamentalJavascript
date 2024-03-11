let star = "";

for (let i = 10; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
