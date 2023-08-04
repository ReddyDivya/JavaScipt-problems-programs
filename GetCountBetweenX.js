/*
Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

Challenges
-----------
getTheGapX('XeroX') returns 4
getTheGapX('Xamarin') returns 0
getTheGapX('JavaScript') returns -1
getTheGapX("F(X) !== G(X) !== F(X)") returns 18

*/
function getTheGapX(str) {
    // write your solution here
    let result = '';
    //find first occurrence of 'x'
    let firstIndex = str.indexOf('X');

    //find last occurrence of 'x'
    let lastIndex = str.lastIndexOf('X');

    //if 'X' is not found then return -1 
    if(firstIndex === -1)
    {
        return -1;
    }
    //there's only one 'X' then return 0
    else if(firstIndex === lastIndex)
    {
        return 0;
    }

    //get the count of characters between the first and last 'X'
        result = lastIndex - firstIndex;
    
    return result;
}

console.log(`Gap between the X's: ${getTheGapX('XeroX')}`);//4
console.log(`Gap between the X's: ${getTheGapX('Xamarin')}`);//0
console.log(`Gap between the X's: ${getTheGapX('AXXBX')}`);//3
console.log(`Gap between the X's: ${getTheGapX('JavaScript')}`);//-1
console.log(`Gap between the X's: ${getTheGapX('Hello, X marks the spot, X marks another spot')}`);//18
