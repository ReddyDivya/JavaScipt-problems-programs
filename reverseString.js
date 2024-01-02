//Reverse a string

//Method 1: Using loop
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
  Method 2: using built-in JavaScript methods - split, reverse, join
  ------------------------------------------------------------------
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


/*
Method 3: using reduce
  ------------------------------------------------------------------
*/

const reverseStringReduceMethod = (str) => {
/*
callback function (reversedStr, char) => char + reversedStr is applied to each element in the array.
reversedStr is the accumulated result (initially an empty string), and char is the current character from the array.
*/
  
  return str.split("").reduce((reversedStr, char) =>  char + reversedStr, "");
}

console.log(reverseStringReduceMethod('palindrome'));//emordnilap
console.log(reverseStringReduceMethod('reverse'));//esrever
console.log(reverseStringReduceMethod('programming'));//gnimmargorp
console.log(reverseStringReduceMethod('javascript'));//tpircsavaj
