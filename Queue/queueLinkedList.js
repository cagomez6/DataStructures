class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        if(this.first){
            return this.first.value;
        }
    }

    enqueue(value){
        const newNode = new Node(value);

        //first one
        if(!this.first && !this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue(){
        if(this.first){
            let current = this.first;
            this.first = current.next;
            current.next = null;
            if(!this.first){
                this.last = null;
            }
            this.length--;
            return current.value;
        }
    }
}

let queue = new Queue();
queue.enqueue('test');
queue.enqueue('program');
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue);