
function reverseString(str) {
    if(str.length <= 1)
    {
        return str;
    }

    return reverseString(str.substring(1)) + str[0];
}

let string = "yoyo mastery";
console.log(reverseString(string));