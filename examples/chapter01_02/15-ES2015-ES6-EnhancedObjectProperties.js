// EcmaScript 2015 (ES6): Destructuring Assignment + Property Shorthand
let [x, y] = ["a", "b"];
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

// swap
[x, y] = [y, x];
var temp = x;
x = y;
y = temp;

// code above is the same as
var x2 = "a";
var y2 = "b";
var obj2 = { x2: x2, y2: y2 };
console.log(obj2); // { x: "a", y: "b" }

// Method Properties
const hello = {
  name: "abcdef",
  printHello() {
    console.log("Hello");
  },
};
hello.printHello();

// code above is the same as:
var hello2 = {
  name: "abcdef",
  printHello: function printHello() {
    console.log("Hello");
  },
};
hello2.printHello();
