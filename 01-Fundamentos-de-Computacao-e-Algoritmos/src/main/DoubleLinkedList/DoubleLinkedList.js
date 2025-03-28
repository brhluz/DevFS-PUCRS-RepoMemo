import { Node } from "./Node.js";

export class DoubleLinkedList{
    
    constructor(){
        this.tail = this.head = null
        this.size = 0;
    }

    addFirst(element){
        const newNode = new Node(element)

        if(this.size === 0){
            this.head = this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.size++
    }

    addLast(element){
        const newNode = new Node(element)
        
        if(this.size === 0){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        
        this.size++
    }

    removeFirst(){
        if(this.size === 0){
            return
        }else if(this.head === this.tail){
            this.head = this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    removeLast(){
        if(this.size === 0){
            return
        }else if(this.head === this.tail){
            this.head = this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    insertAfter(elementToInsert, elementToFind){
        if(this.size===0){
            return null
        }

        let node = this.find(elementToFind)

        if(node==null){
            return null
        }
        
        if(this.head === node){
            let newNode = Node(elementToInsert)
            this.head.next = newNo
        }

        this.size++
    }

    insertBefore(){

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

        if(node==null){
            return null
        }

        if(this.head === node && this.tail === node){
            this.head = this.tail = node = null
        }else if(this.head === node){
            this.head = node.next
            this.head.prev = null
            node = null
        }else if(this.tail === node){
            this.tail = node.prev
            this.tail.next = null
            node = null
        }else{
            node.next.prev = node.prev
            node.prev.next = node.next
            node = null
        }

        this.size--
        return node.element
        
    }

}