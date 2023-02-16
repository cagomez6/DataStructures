const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length <= 1) {
    return array
  }
  // Split Array in into right and left
//   console.log("RESULT:", array)
  let left = array.slice(0, array.length/2);
  let right = array.slice(array.length/2);

//   console.log("RESULT LEFT:", left, "RESULT RIGHT:", right)
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){

    let result = [];

    // console.log("LEFT: ", left, "RIGHT: ", right)
    while(left.length > 0 && right.length > 0)
    {
        if(left[0]  < right[0])
        {
            result.push(left.shift())
            // console.log("LEFT IS LOWER: ", result)
        } else {
            result.push(right.shift())
            // console.log("RIGHT IS LOWER: ", result)
        }
    }

    if(left.length > 0)
    {
        // console.log("LEFT CONCAT: ", left)
        result.push(...left);
    }

    if(right.length > 0)
    {
        // console.log("RIGHT CONCAT: ", right)
        result.push(...right);
    }

    // console.log("MERGE RESULT", result);
    return result;
}


const answer = mergeSort(numbers);
console.log("END RESULT:" , answer);