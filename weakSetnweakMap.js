//! WEAK SET & WEAK MAP
const ws = new WeakSet();
const obj1 = {};
const obj2 = {};

ws.add(obj1);
ws.add(obj2);

console.log(ws);
console.log(ws.has(obj1));

ws.delete(obj1);
console.log(ws.has(obj1));

const wm = new WeakMap();

wm.set(obj1, 12345);

console.log(wm.has(obj1));
console.log(wm.get(obj1));

wm.delete(obj1);
console.log(wm.has(obj1));
