function findFactorialRecursive(number)
{
    if(number === 1)
    {
        return 1;
    }

    return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number)
{
    let result = 1;
    let current = number;
    while(current > 1)
    {
        result *= current;
        current--;
    }

    return result;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));