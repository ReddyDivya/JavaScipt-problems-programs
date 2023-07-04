//Reverse a string

//Method 1: 
const reverseString = (str) => {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString('palindrome'));//emordnilap
console.log(reverseString('reverse'));//esrever
console.log(reverseString('programming'));//gnimmargorp
console.log(reverseString('javascript'));//tpircsavaj



/*
  Method 2: using built-in JavaScript methods - Eg (palindrome)
  ----------------------------------------------------
  split() function splits the string into an array of characters, then 
    -> ['p', 'a', 'l', 'i', 'n', 'd', 'r', 'o', 'm', 'e']
  reverse() reverses the order of the elements in the array, and finally, 
    -> ['e', 'm', 'o', 'r', 'd', 'n', 'i', 'l', 'a', 'p']
  join() combines the elements back into a single string.
    -> emordnilap
*/

const reverseStringBuiltInMethod = (str) => {
  return str.split('').reverse().join('');
}

console.log(reverseStringBuiltInMethod('palindrome'));//emordnilap
console.log(reverseStringBuiltInMethod('reverse'));//esrever
console.log(reverseStringBuiltInMethod('programming'));//gnimmargorp
console.log(reverseStringBuiltInMethod('javascript'));//tpircsavaj
