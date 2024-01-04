//Anagram
/*
anagram("heart", "earth");//true
anagram("heart!", " earth");//true
anagram("lol", "loki");//false
*/
const anagram = (str1, str2) => {
    let strCharCountObj1 = {};
    let strCharCountObj2 = {};
    
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();        
    
    if(str1.length != str2.length)
        return false;
    
    for(let char of str1){
        strCharCountObj1[char] = strCharCountObj1[char] + 1 || 1;
    }
    
    for(let char of str2)
    {
        strCharCountObj2[char] = strCharCountObj2[char] + 1 || 1;
    }
    
    for(let key of str1)
    {
        if(strCharCountObj1[key] !== strCharCountObj2[key])
        {
            return false;
        }
    }
    
    return true;
}

console.log(anagram("heart!", " earth"));//true
console.log(anagram("heart!! ! ", " earth "));//true
console.log(anagram("listen", "silent"));//true
console.log(anagram("hello", "world"));//false
console.log(anagram("heart", "earth"));//true
console.log(anagram("lol", "loki"));//false
