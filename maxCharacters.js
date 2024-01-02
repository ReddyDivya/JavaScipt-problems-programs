//maxChar

const maxChar = (str) => {
    //Create an object to store character frequencies
    let charCountObj = {};
    let maxChar= "";
    let maxCount = 0;
    
    // Iterate through each character in the string
    for(let char of str)
    {
        // Increment the count for the current character in the charCountObj
        charCountObj[char] = (charCountObj[char] + 1) || 1;
        
        // Find the character with the maximum frequency
        if(charCountObj[char] > maxCount){
            maxChar = char;
            maxCount = charCountObj[char];
        }
    }
    
    return maxChar;
}

console.log(maxChar('Hello'));//l
console.log(maxChar('programming'));//r
console.log(maxChar('Madam'));//a
console.log(maxChar('puppy'));//p
console.log(maxChar('Hello world'));//l
