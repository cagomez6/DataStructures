function mergeSorted(arr1, arr2){
    //Check empty strings
    if(arr1.length === 0) {
        return arr2;
    }

    if(arr2.length === 0){
        return arr1
    }

    let newArr = [];
    let i = 0;
    let j = 0;
    while( i < arr1.length && j < arr2.length){
        //array 1 is smaller, increment i
        if(arr1[i] <= arr2[j]){
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    //push remainders
    if(i === arr1.length){
        newArr.push(...arr2.slice(j))
    } else {
        newArr.push(...arr1.slice(i))
    }

    return newArr;
}

arr1 = [0,0,2,5,6];
arr2 = [2,3,7,8,9];

console.log(mergeSorted(arr1, arr2));