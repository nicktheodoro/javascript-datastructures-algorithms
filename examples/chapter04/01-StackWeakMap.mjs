import StackWeakMap from "../../src/data-structures/stack/stack-weak-map.mjs";

const stack = new StackWeakMap();
stack.push(5);
stack.push(8);
// Privacy tests
let objectNames = Object.getOwnPropertyNames(stack);
console.log(objectNames.length);
console.log(objectNames);
console.log(objectNames[0]);

// Privacy tests with Symbols
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);

stack.print(); // output 5, 8
