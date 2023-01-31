class Queue {
    constructor(){
        this.arr = [];
    }

    peek(){
        if(this.arr.length > 0){
            return this.arr[0];
        }
    }

    enqueue(value){
        this.arr.push(value);
    }

    dequeue(){
        if(this.arr.length > 0)
        {
            return this.arr.shift();
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