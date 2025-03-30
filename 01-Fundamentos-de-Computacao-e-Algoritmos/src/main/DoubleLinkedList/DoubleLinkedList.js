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

        let newNode = null

        if(this.size===0){
            return null
        }

        let node = this.find(elementToFind)

        if(node==null){
            return elementToFind
        }
        
        newNode = new Node(elementToInsert)
        
        if(this.head === node && this.tail === node){
            this.head.next = newNode
            newNode.prev = this.head
            this.tail = newNode
        }else if(this.head === node){
            this.head.next.prev = newNode
            this.head.next = newNode
        }else if(this.tail === node){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }else{
            node.next.prev = newNode
            newNode.next = node.next
            node.next = newNode
            newNode.prev = node
        }

        this.size++

        return newNode
    }

    insertBefore(elementToInsert, elementToFind){
        
        let newNode = null
        
        if(this.size === 0) return null

        let node = this.find(elementToFind)

        if(node == null) return elementToFind

        newNode = new Node(elementToInsert)

        if(this.head === node && this.tail === node){
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }else if(this.head === node){
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }else if(this.tail === node){
            newNode.next = this.tail
            this.tail.prev.next = newNode
            this.tail.prev = newNode
        }else{
            node.prev.next = newNode
            newNode.prev = node.prev
            node.prev = newNode
            newNode.next = node
        }

        this.size++

        return newNode
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