const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let end = array.length;

    while(end > 1)
    {
        for(let i = 0; i < end-1; i++)
        {
            if(array[i] > array[i+1])
            {
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
        // console.log("Result: ", numbers);
        end--;
    }
}

bubbleSort(numbers);
console.log(numbers);