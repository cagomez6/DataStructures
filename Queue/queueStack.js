class Queue {
    constructor(){
        this.mainStack = [];
        this.helperStack = [];
    }

    peek(){
        if(this.helperStack.length > 0) {
            return this.helperStack[this.helperStack.length-1];
        } else {
            return this.mainStack[0]
        }
    }

    enqueue(value){
        const length = this.helperStack.length;
        for(let i = 0; i < length; i++){
            this.mainStack.push(this.helperStack.pop());
        }
        return this.mainStack.push(value);
    }

    dequeue(){
        const length = this.mainStack.length;
        for(let i = 0; i < length; i++)
        {
            this.helperStack.push(this.mainStack.pop());
        }
        return this.helperStack.pop();
    }
}


let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue);