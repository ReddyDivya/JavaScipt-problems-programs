//Write a program to reverse a given integer number

//Method 1: 
function reverseGivenInteger(num) {
    // write your solution here
    let result = '';

    while(num > 0)
    {
        //extract the last digit
        let digit = num % 10;

        //append the digit to the reversed number
        result = result * 10 + digit;
        
        //remove the last digit from the number
        num = Math.floor(num / 10);
    }
    
    if(num < 0)
    {
        result = `Given ${num} is less than 0`;
    }
    return result;
}

console.log(reverseGivenInteger(3456));//6543
console.log(reverseGivenInteger(-6));//Given -6 is less than 0
console.log(reverseGivenInteger(900));//9

//Method 2: using built-in methods - split, reverse, join
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
