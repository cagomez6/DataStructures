const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
 
    for(let nextIndex = 1; nextIndex < numbers.length; nextIndex++)
    {

        let i = nextIndex;
        let temp = numbers[nextIndex];
        while(i > 0 && temp < numbers[i-1])
        {
            numbers[i] = numbers[i-1]
            i--;
        }
        
        numbers[i] = temp;
    }

}

insertionSort(numbers);
console.log(numbers);