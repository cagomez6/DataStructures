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
            return current;
        } else {
            return false;
        }
    }

    remove(value){
        //find the target node
        if(!this.root){
            return;
        }

        let target = null;
        let targetPrev = null;
        let current = this.root;
        while(current.left || current.right)
        {
            if(value < current.value && current.left)
            {
                targetPrev = current;
                current = current.left;
            }
            else if(value > current.value && current.right)
            {
                targetPrev = current;
                current = current.right;
            }
            else{
                break;
            }
        }

        //if found, check its children nodes going right -> left -> left...
        if(current.value === value)
        {
            target = current;
            if(target.right)
            {
                let currentPrev = current;
                current = target.right;

                //find the leftmost node
                while(current.left)
                {
                    currentPrev = current;
                    current = current.left;
                }

                //if its not the root node
                if(targetPrev){
                    //point to the node that will replace target
                    if(value < targetPrev.value)
                    {
                        targetPrev.left = current;
                    } else if(value > targetPrev.value){
                        targetPrev.right = current;
                    }
                } else {
                    this.root = current;
                }
                

                //change that node's pointers to the same as target, check if this is an end node to avoid pointing to itself
                if(!current.left && current !== target.left)
                {
                    current.left = target.left;
                }

                if(!current.right && current !== target.right)
                {
                    current.right = target.right;
                }
                

                //change that nodes parent to point to null; Since target will be deleted anyways, does not matter if it overlaps.
                currentPrev.left = null;

                //Delete pointers related to target
                target.left = null;
                target.right = null;

            //if right doesnt exist, repeat but with left -> right -> right instead
            } else if(target.left){
                let currentPrev = current;
                current = target.left;

                //find the rightmost node
                while(current.right)
                {
                    currentPrev = current;
                    current = current.right;
                }

                //if its not the root node
                if(targetPrev){
                    //point to the node that will replace target
                    if(value < targetPrev.value)
                    {
                        targetPrev.left = current;
                    } else if(value > targetPrev.value){
                        targetPrev.right = current;
                    }
                } else {
                    this.root = current;
                }
                

                //change that node's pointers to the same as target, check if this is an end node to avoid pointing to itself
                if(!current.left && current !== target.left)
                {
                    current.left = target.left;
                }

                if(!current.right && current !== target.right)
                {
                    current.right = target.right;
                }
                

                //change that nodes parent to point to null; Since target will be deleted anyways, does not matter if it overlaps.
                currentPrev.right = null;

                //Delete pointers related to target
                target.left = null;
                target.right = null;

            //If it is a leaf node, just delete the pointer in the parent.
            } else {
                //if target is not the root node
                if(targetPrev)
                {
                    if(value < targetPrev.value)
                    {
                        targetPrev.left = null;
                    } else if(value > targetPrev.value){
                        targetPrev.right = null;
                    }
                //if target is the root node and a leaf node, set to null
                } else {
                    this.root = null;
                }

                target.left = null;
                target.right = null;
            }
        } else {
            return;
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

tree.remove(20)
// console.log(tree.lookup(9))
console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

