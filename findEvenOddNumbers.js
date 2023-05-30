//Find Even and Odd elements from an array
/*
    filter - The filter() method creates a new array by filtering out the elements that do not meet the specified condition. 
    In this case, the condition checks if the index of the current value is the same as the first occurrence of that value in the array, effectively removing duplicates.
    ------------------------------------------------------------------------------------------------------------------------
    Syntax
    ------------
    array.filter(function(currentValue, index, arr), thisValue)
    
    function() - Required. A function to run for each array element.
    currentValue - Required. The value of the current element.
    index	- Optional. The index of the current element.
    arr	- Optional. The array of the current element.
    thisValue- Optional. Default undefined. A value passed to the function as its this value.
    -----------------------------------------------------------------------------------------
*/ 

const array = [1, 22, 33, 3, 44, 4, 55, 7, 55, 44, 33, 22, 1];

//even numbers
const evenNumbers  = array.filter((currentValue, index, arr) => currentValue % 2 === 0);
console.log(evenNumbers );

//odd numbers
const oddNumbers = array.filter((currentValue, index, arr) => currentValue % 3 == 0);
console.log(oddNumbers);
