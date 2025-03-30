import { DoubleLinkedList } from "./DoubleLinkedList.js";
import { Node } from "./Node.js";

//Criação da lista + addFirst / addLast

const list = new DoubleLinkedList()

list.addFirst(10)
list.addFirst(5)
list.addFirst(20)
list.addFirst(25)

list.toArray()
list.toReverseArray()

//insertAfter
list.insertAfter(15,10)
list.insertAfter(30,25)
list.toArray()

//insertBefore
list.insertBefore(8, 10)
list.insertBefore(2, 5)
list.toArray()

//remove
list.remove(15)
list.remove(2)
list.remove(30)
list.toArray()

//find
console.log("Elemento: " + list.find(20).element)
console.log("Elemento: " + list.find(999)?.element)

//removeFirst removeLast
list.removeFirst();
list.removeLast()
list.toArray()