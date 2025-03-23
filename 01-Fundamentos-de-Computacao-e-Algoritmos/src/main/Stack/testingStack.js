import { Stack } from "./Stack.js";

const stack01 = new Stack();

stack01.isEmpty();

stack01.push(1);
stack01.prettyPrintStack();
stack01.push(3);
stack01.prettyPrintStack();
stack01.push(4);
stack01.prettyPrintStack();
stack01.push(6);
stack01.prettyPrintStack();
stack01.push(8);
stack01.prettyPrintStack();

stack01.isEmpty();

stack01.pop();
stack01.prettyPrintStack();
stack01.pop();
stack01.prettyPrintStack();

console.log("Last Item: " + stack01.peek() + "\n");

stack01.clear();
stack01.prettyPrintStack();
console.log(stack01.isEmpty());
