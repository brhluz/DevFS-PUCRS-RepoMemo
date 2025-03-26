export class Queue{

    constructor(){
        this.queue = new Array();
    }

    /**  
     * put element in queue
     * 
     * */ 
    enqueue(element){
        this.queue.push(element);
    }

    /**  
     * remove first element from queue
     * */ 
    dequeue(){
        if(!this.isEmpty()){
            return "Removed from queue" + this.queue.shift();
        }else{
            return "The queue is empty"
        }
    }

    /**
     * Return first element from queue
     * */ 
    peek(){
        if(!this.isEmpty()){
            return "First element from queue: " + this.queue.at(0);
        }else{
            return "The queue is empty"
        }
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return "Size of Queue: " + this.queue.length;
    }

    clear(){
        this.queue = []
    }

    prettyPrintQueue(){
        console.log("Queue:")
     /*    console.log("For testing:")
        let teste = ""
        for(let i in this.queue){
            teste += " "+i
        }
        console.log(teste) */
        console.log("| " + this.queue.join(" | ") + " |")
    }

}