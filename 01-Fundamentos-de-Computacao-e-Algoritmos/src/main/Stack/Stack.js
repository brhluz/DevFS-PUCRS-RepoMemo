export class Stack{
    constructor(){
        this.items = new Array();
    }

    /**
     * Add a element in the stack
     */
    push = (element) => {
        this.items.push(element);
    }

     /**
     * Remove a element in the stack
     */
    pop = () => {
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

     /**
     * Returns the last item of the Stack.
     */
    peek = () => {
        return this.isEmpty() ? null : this.items.at(-1);
        // return this.items.at?.(-1) ?? null; // testing, is new for me
    }

    /**
     * Verify if the stack is empty :)
     */
    isEmpty(){
        return this.items.length === 0;
    }

    clear(){
        this.items = [];
    }
    
    size(){
        return this.items.length;
    }

    /** 
    *  @author bruno.luz
    */
    prettyPrintStack(){
        console.log("STACK: ")
        for(let i = this.items.length-1; i>=0 ; i--){
            console.log(`| ${this.items[i]} |`);
        }
        console.log(" ‾‾‾‾‾‾‾‾‾‾ ")
    }

}