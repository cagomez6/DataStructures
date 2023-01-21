class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        //check valid index
        if(index === 0) {
            return this.prepend(value);
        }

        if(index === this.length) {
            return this.append(value);
        }

        if(index > 0 && index < this.length)
        {
            const newNode = new Node(value);

            let current = this._iterateTo(index);

            newNode.next = current.next;
            current.next = newNode;
            this.length++;
        }
    }

    remove(index) {
        //check valid index
        if(index >= 0 && index < this.length)
        {
            //if first item, set new head
            if(index === 0) {
                let temp = this.head;
                this.head = temp.next;
                temp = null;
            } else {
                let current = this._iterateTo(index);
                let deleteTarget = current.next;
                current.next = deleteTarget.next;
                deleteTarget.next = null;
                deleteTarget = null;

                //if last item, set new tail
                if(index === this.length-1) {
                    this.tail = current;
                }
            }
            this.length--;
        }
    }

    _iterateTo(index) {
        let current = this.head;
        for(let i = 0; i < index-1; i++)
        {
            current = current.next;
        }
        return current;
    }

    printList() {
        const array = [];
        let current = this.head;
        while(current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    reverse() {
        if(this.head.next){
            let prevNode = null;
            let nextNode = null;
            let current = this.head;

            while(current !== null) {
                //first node becomes last
                if(!prevNode) {
                    this.tail = this.head;
                }

                //last node becomes first
                if(current.next === null) {
                    this.head = current;
                }

                //switch pointers to point to old parent
                nextNode = current.next;
                current.next = prevNode;
                
                prevNode = current;
                current = nextNode;
            }
        }
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,7);
myLinkedList.reverse();
console.log(myLinkedList);
console.log(myLinkedList.printList());