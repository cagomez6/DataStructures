class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // insert(value){
    //     const newNode = new Node(value);
    //     if(!this.root)
    //     {
    //         this.root = newNode;
    //     } else {
    //         let previous = null;
    //         let current = this.root;

    //         while(current !== null)
    //         {
    //             //already exists, do nothing
    //             if(newNode.value === current.value) {
    //                 return;
    //             } 
    //             //less than
    //             else if(newNode.value < current.value) {
    //                 previous = current;
    //                 current = current.left;
    //                 if(!current){
    //                     previous.left = newNode;
    //                 }
    //             }
    //             //greater than
    //             else {
    //                 previous = current;
    //                 current = current.right;
    //                 if(!current){
    //                     previous.right = newNode;
    //                 }
    //             }
    //         }
    //     }
    // }

    //cleaner version
    insert(value){
        const newNode = new Node(value);
        
        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(current.left || current.right)
        {
            if(newNode.value < current.value && current.left)
            {
                current = current.left;
            }
            else if(newNode.value > current.value && current.right)
            {
                current = current.right;
            }
            else{
                break;
            }
        }
        
        //same value
        if(newNode.value === current.value)
        {
            return;
        }
        //less than
        else if(newNode.value < current.value)
        {
            current.left = newNode;
        } 
        //greater than
        else 
        {
            current.right = newNode;
        }
    }
    
    lookup(value){
        if(!this.root){
            return false;
        }

        let current = this.root;
        while(current.left || current.right)
        {
            if(value < current.value && current.left)
            {
                current = current.left;
            }
            else if(value > current.value && current.right)
            {
                current = current.right;
            }
            else{
                break;
            }
        }

        if(current.value === value)
        {
            return true;
        } else {
            return false;
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(4))
// console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

