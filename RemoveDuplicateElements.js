//Find remove element from an array

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

// Method - 2: Using Set
//To find duplicate elements in array in javascript
const findDuplicates = (inputArray) => {
  //Using Set
  let uniqueElements = new Set();
  let duplicates = [];

  for(let element of inputArray)
  {
    if(uniqueElements.has(element))//if element is duplicate
    {
      duplicates.push(element);
    }
    else //add new elements
    {
      uniqueElements.add(element);
    }
  }

  return duplicates;
};

console.log(findDuplicates([1,2,3,3,4,2,5,6, 1,7,3,6]));//[3, 2, 1, 3, 6]
