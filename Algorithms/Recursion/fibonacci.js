function fibonacciRecursive(n)
{
    if(n <= 0)
    {
        return 0;
    }

    if(n === 1)
    {
        return 1;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciIterative(n)
{
    if(n === 0)
    {
        return 0;
    }

    if(n === 1)
    {
        return 1;
    }

    let first = 0;
    let second = 1;
    result = 0;

    for(let i = 2; i <= n; i++)
    {
        result = first + second;
        first = second;
        second = result;
    }

    return result;
}


console.log(fibonacciRecursive(3));
console.log(fibonacciIterative(3));