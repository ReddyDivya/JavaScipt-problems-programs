//Palindrome
/*
Palindrome("Madam"); //true
Palindrome("Liril"); //true
Palindrome("Hello"); //false
Palindrome("Bob"); //true
*/

const Palindrome = (str) => {
    str = str.toLowerCase();
    let reversedString = str.split(" ").reverse().join("");
    
    if(str === reversedString)
        console.log(`The given string ${str} is a Palindrome`)
    else
        console.log(`The given string ${str} is not a Palindrome`)
    
    return str === reversedString ? true : false;
}

console.log(Palindrome("Hello"));//false
console.log(Palindrome("Liril"));//true
console.log(Palindrome("Madam"));//true
console.log(Palindrome("Bob"));//true
