function recurring(arr) {
    if(arr.length) {
        const numMap = new Map();
        for(let num of arr){
            if(numMap.has(num)){
                return num;
            } else{
                numMap.set(num, num);
            }
        }
    }
    return undefined;
}

function recurring2(arr) {
    let map = {};
    for(let i = 0; i < arr.length; i++)
    {
        if(map[arr[i]] !== undefined) {
            return arr[i]
        } else {
            map[arr[i]] = i;
        }
    }

    return undefined;
}


arr1 = [2,5,1,2,3,5,1,2,4];
arr2 = [2,1,1,2,3,5,1,2,4];
arr3 = [2,3,4,5];

console.log(recurring(arr1));
console.log(recurring(arr2));
console.log(recurring(arr3));

console.log(recurring2(arr1));
console.log(recurring2(arr2));
console.log(recurring2(arr3));