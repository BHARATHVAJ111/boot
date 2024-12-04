//primitives-cannot be changed
let a=10;
let b=a;
b=100;
console.log(a); 


//complex--not primitives its can be changed
let obj = { name: "Alice" };
obj.name = "Bob"; // The object is modified
console.log(obj.name); // "Bob"

const foo = [1,9];
const bar = foo;

bar[0] =9;

console.log(foo, bar); // => 1, 9

//practices
const amount=1000;
console.log('your bill amount is RS.' + amount);

