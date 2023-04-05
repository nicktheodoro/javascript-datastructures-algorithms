import { parenthesesChecker } from "../../src/others/balanced-symbols.mjs";

console.log("{([])}", parenthesesChecker("{([])}")); // true
console.log("{{([][])}()}", parenthesesChecker("{{([][])}()}")); // true
console.log("[{()]", parenthesesChecker("[{()]")); // false
