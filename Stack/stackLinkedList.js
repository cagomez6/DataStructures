class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        if(this.top){
            return this.top.value;
        }
    }

    push(value){
        const newNode = new Node(value);

        //first one
        if(!this.bottom && !this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }

        this.length++;
    }

    pop(){
        let current = this.bottom;
        //check if its the only one
        if(current === this.top) {
            this.top = null;
            this.bottom = null;
            this.length--;
            return current.value;
        } else {
            //iterate to end and get the one before it
            let previous = null;
            while(current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
            this.top = previous;
            this.length--;
            return current.value;
        }
    }
}

let stack = new Stack();
stack.push('test');
stack.push('program');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);