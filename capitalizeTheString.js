//Capitalize the String
/*
capitalizeString("source and shout");//Source And Shout
capitalizeString("rent a house without brokerage");//Rent A House Without Brokerage 

Method 1:
*/
const capitalizeString = (str) => {
    //split the string into words
    let words = str.split(" ");
    let result = "";
    
    for(let i=0; i < words.length; i++){
        //capitalize the first character of the word
        const firstCharOfTheString = words[i].slice(0, 1).toUpperCase();
        const restCharsOfTheString = words[i].slice(1, words[i].length);
        
        //concat the first character and the rest of the characters
        result += firstCharOfTheString.concat(restCharsOfTheString+ " ");
    }
    
    return result;
}

console.log(capitalizeString("source and shout"))
console.log(capitalizeString("rent a house without brokerage"))

//Method 2:
const capitalizeString = (str) => {
    //split the string into words
    let words = str.split(" ");//words
    const result = [];
    
    for(let i=0; i<words.length; i++){
        const word = words[i];//word
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    
    return result.join(" ");
}

console.log(capitalizeString("source and shout"));//Source And Shout
console.log(capitalizeString("rent a house without brokerage"));//Rent A House Without Brokerage

//Method 3:
 capitalizeString = (str) => {
   return str.split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
   ).join(" ")
}

console.log(capitalizeString("source and shout"));//Source And Shout
console.log(capitalizeString("rent a house without brokerage"));//Rent A House Without Brokerage
