//Find remove element from an array

/*
    Syntax
    ------------
    array.filter(function(currentValue, index, arr), thisValue)
    
    function() - Required. A function to run for each array element.
    currentValue - Required. The value of the current element.
    index	- Optional. The index of the current element.
    arr	- Optional. The array of the current element.
    thisValue- Optional. Default undefined. A value passed to the function as its this value.
*/    
const array = [1, 22, 33, 3, 44, 4, 55, 7, 55, 44, 33, 22, 1];
const uniqueArray = array.filter((currentValue, index, arr) => arr.indexOf(currentValue) === index);
console.log(uniqueArray);
/*
Output
------------
[
   1, 22, 33, 3,
  44,  4, 55, 7
]
*/
