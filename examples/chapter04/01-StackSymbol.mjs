import StackSymbol from "../../src/data-structures/stack/stack-symbol.mjs";

const stack = new StackSymbol();
const objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length); // 1
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]); // Symbol()
stack[objectSymbols[0]].push(1);
stack.print(); // 5, 8, 1
