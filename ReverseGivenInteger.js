//Write a program to reverse a given integer number

//Method 1: using built-in methods - split, reverse, join
function reverseGivenInteger(num) {
    let result = '';
    if(num > 0)
    {
        //convert int to string
        let str = num.toString();

        //reverse number to string
        result = str.split('').reverse().join('');
        
        //reverse string to int
        result = `Reversed integer is: ${parseInt(result)}`;
    }
    else
    {
        result = `Given ${num} is less than 0`;
    }
    return result;
}

console.log(reverseGivenInteger(3456));//6543
console.log(reverseGivenInteger(-6));//Given -6 is less than 0
console.log(reverseGivenInteger(900));//9
