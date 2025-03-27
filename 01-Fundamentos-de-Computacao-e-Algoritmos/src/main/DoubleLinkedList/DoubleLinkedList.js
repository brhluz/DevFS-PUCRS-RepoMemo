import { Node } from "./Node.js";

export class DoubleLinkedList{
    
    constructor(element){
        this.tail = this.head = new Node(element);
        this.size = 1;
    }

    addFirst(element){
        this.size++
        const newNode = new Node(element)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
    }

    addLast(element){
        this.size++
        const newNode = new Node(element)
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    removeFirst(){
        if(this.size === 0){
            return
        }else if(this.head === this.tail){
            this.head = this.tail = null
        }else{
            this.size--
            this.head = this.head.next
            this.head.prev = null
        }
    }

    removeLast(){
        if(this.size === 0){
            return
        }else if(this.head === this.tail){
            this.head = this.tail = null
        }else{
            this.size--
            this.tail = this.tail.prev
            this.tail.next = null
        }
    }

    find(element){
        if(this.head == null){
            return null
        }

        let current = this.head

        while(current != null){
            if(current.element === element) return current;
            current = current.next
        }

        return null

    }

    remove(element){
        let node = this.find(element)
        if(node != null){
            node.prev.next = node.next
            node.next.prev = node.prev
            node = null
            return
        }
        return null
    }

}