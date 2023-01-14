function reverseArray(arr) {
    startIndex = 0;
    endIndex = arr.length-1;
    for(; startIndex < endIndex; startIndex++)
    {
        tempChar = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = tempChar;
        endIndex--;
    }
    return string;
}

function reverseString(str) {
    const t0 = performance.now();
    if(!str || str.length < 2 || typeof str !== 'string'){
        return str;
    }

    const backwards = [];

    for(let i = str.length-1; i >= 0; i--)
    {
        backwards.push(str[i]);
    }

    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
    return backwards.join('')
}

function reverseString2Array(str) {
    const t0 = performance.now();
    if(!str || str.length < 2 || typeof str !== 'string'){
        return str;
    }

    arr = str.split('');

    startIndex = 0;
    endIndex = arr.length-1;
    for(; startIndex < endIndex; startIndex++)
    {
        tempChar = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = tempChar;
        endIndex--;
    }

    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
    return arr.join('');
}

// console.log(reverseArray(['P','e','p','e','g','a']));
console.log(reverseString2Array("No dreams only memes"));
console.log(reverseString("No dreams only memes"));