const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for(let start = 0; start < numbers.length; start++)
    {
        let min = numbers[start];
        let minIndex = start;
        for(let i = start; i < numbers.length; i++)
        {
            if(numbers[i] < min)
            {
                min = numbers[i];
                minIndex = i;
            }
        }

        let temp = numbers[minIndex];
        numbers[minIndex] = numbers[start];
        numbers[start] = temp;
    }
}

selectionSort(numbers);
console.log(numbers);