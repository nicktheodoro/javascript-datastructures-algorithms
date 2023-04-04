import Stack from "../../src/data-structures/stack/stack.mjs";
// import StackArray from "../../src/data-structures/stack/stack-array.mjs";
// import StackSymbol from "../../src/data-structures/stack/stack-symbol.mjs";
// import StackWeakMap from "../../src/data-structures/stack/stack-weak-map.mjs";

// Items are public.
const stack = new Stack();

// Items are public.
// const stack = new StackArray();

// using Symbol to store Stack items provides partial privacy. However, using getOwnPropertySymbols
// allows access to the data.
// const stack = new StackSymbol();

// using WeakMap to store Stack items we ensure true privacy
// const stack = new StackWeakMap();

// Privacy tests
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

// Privacy tests with Symbols
// stack.push(5);
// stack.push(8);
// let objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);
// stack[objectSymbols[0]].push(1);
// console.log(stack.toString());

console.log("stack.isEmpty() => ", stack.isEmpty()); // outputs true

stack.push(5);
stack.push(8);

console.log("stack after push 5 and 8 => ", stack.toString());

console.log("stack.peek() => ", stack.peek()); // outputs 8

stack.push(11);

console.log("stack.size() after push 11 => ", stack.size()); // outputs 3
console.log("stack.isEmpty() => ", stack.isEmpty()); // outputs false

stack.push(15);

stack.pop();
stack.pop();

console.log("stack.size() after push 15 and pop twice => ", stack.size()); // outputs 2
