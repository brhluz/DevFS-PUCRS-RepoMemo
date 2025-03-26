import { Queue } from "./Queue.js";

const q01 = new Queue();

console.log(q01.peek())

q01.enqueue(1)
q01.prettyPrintQueue();
q01.enqueue(2)
q01.prettyPrintQueue();
q01.enqueue(6)
q01.prettyPrintQueue();
q01.enqueue(4)
console.log(q01.peek());
q01.prettyPrintQueue();


q01.dequeue();
console.log(q01.peek());
q01.prettyPrintQueue();

q01.dequeue();
console.log(q01.peek());
q01.prettyPrintQueue();

console.log(q01.size());

q01.clear();

console.log(q01.size());