class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    // set(key, value) {
    //     if(!this.data[this._hash(key)]){
    //         this.data[this._hash(key)] = {key: key, value: value, next: null};
    //     } else {
    //         let current = this.data[this._hash(key)];
    //         while(current.next !== null)
    //         {
    //             current = current.next;
    //         }

    //         current.next = {key: key, value: value, next: null};
    //     }
    // }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
        this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    // get(key) {
    //     if(!this.data[this._hash(key)]) {
    //         return null;
    //     }

    //     let current = this.data[this._hash(key)];

    //     while(current !== null) {
    //         if(current.key === key)
    //         {
    //             return current.value;
    //         } else {
    //             current = current.next;
    //         }
    //     }
    // }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  console.log(myHashTable.get('grapes'));
  myHashTable.set('apples', 9);
  console.log(myHashTable.get('apples'));