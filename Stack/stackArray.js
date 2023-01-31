class Stack {
    constructor(){
        this.arr = [];
    }

    peek(){
        if(this.arr.length > 0){
            return this.arr[this.arr.length-1];
        }
    }

    push(value){
        this.arr.push(value);
    }

    pop(){
        if(this.arr.length > 0)
        {
            this.arr.pop();
        }
    }
}

let stack = new Stack();
stack.push('test');
stack.push('program');
stack.push('awasd');
stack.push('yausda')
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);