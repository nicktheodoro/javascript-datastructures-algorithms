import { hanoi } from "../../src/others/hanoi.mjs";
import { hanoiStack } from "../../src/others/hanoi.mjs";

console.log(hanoiStack(3));

console.log(hanoi(3, "source", "helper", "dest"));
