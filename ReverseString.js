//Reverse a string
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
