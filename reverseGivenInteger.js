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
        parseInt(result);
    }
    return result;
}

console.log(`Reversed integer is: ${reverseGivenInteger(3456)}`)
