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
        if(index === 0) {
            return this.prepend(value);
        }

        if(index === this.length) {
            return this.append(value);
        }

        if(index > 0 && index < this.length)
        {
            const newNode = new Node(value);

            let current = this.head;
            for(let i = 0; i < index-1; i++)
            {
                current = current.next;
            }

            newNode.next = current.next;
            current.next = newNode;
            this.length++;
        }
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,7);
console.log(myLinkedList);
console.log(myLinkedList.printList());