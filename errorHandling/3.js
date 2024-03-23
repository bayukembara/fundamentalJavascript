//? Exercise Throw Custom Error Object
function div(a, b) {
  if (a === 0) {
    throw new SyntaxError("Error the First Parameter can't be zero");
  }
  if (b === 0) {
    throw new Error("Error The Second Parameter can't be zero");
  }
  return a / b;
}
console.log(div(0, 0));
