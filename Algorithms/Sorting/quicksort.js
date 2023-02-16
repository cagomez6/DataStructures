const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
    // console.log("LEFT:",left,"RIGHT:", right)
    if(left < right)
    {
        center = partition(array, left, right);
        // console.log("ARRAY@@@@@@", array)
        // console.log("PARTITION@@@@@@", center)
        quickSort(array, left, center);
        quickSort(array, center+1, right);
    }
}

function partition(array, left, right)
{
    //pivot function goes here, use first as temporary. Ideally you swap it to the start or end. In this case we use the start
    let pivot = left;

    //If using function, swap places with start here
    swap(array, pivot, left)
    let low = left+1;
    let high = right;

    //check to make sure we dont need to do anything aka the end of the recursion
    if(low >= high)
    {
        return high-1;
    }

    // console.log("PIVOT:", pivot,"LOW:", low, "HIGH:", high);

    while(low < high)
    {
        // console.log("START LOW:", low, "START HIGH:", high);
        // console.log("LOW VALUE:", array[low], "HIGH VALUE:", array[high])
        while(array[low] < array[pivot])
        {
            low++;
        }

        while(array[high] > array[pivot])
        {
            high--
        }

        if(low < high)
        {
            swap(array, low, high);
            low++;
            high--;
        }

        // console.log("END LOW:", low, "END HIGH:", high);
        // console.log("LOW VALUE:", array[low], "HIGH VALUE:", array[high])
        
    }

    if(low)
    swap(array, pivot, high);
    return high;
}

function swap(array, a, b)
{
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
// let center = partition(numbers, 0, numbers.length - 1)
// console.log("CENTER INDEX:", center, "CENTER VALUE:", numbers[center])
console.log(numbers);