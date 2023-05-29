//Finding the largest number from an array

/*
  1. Initialize a variable "vLargestNum" to hold the maximum value and set it to the first element of the array.
  2. Iterate through the remaining elements of the array starting from the second element.
  3. For each element, compare it with the current maximum value (vLargestNum).
  4. If the element is greater than "vLargestNum", update the value of "vLargestNum" to the current element.
  5. Continue iterating through the rest of the array, updating "vLargestNum" whenever a larger element is found.
  6. Once the iteration is complete, the variable "vLargestNum" will contain the largest number in the array.
  Return the value of max.  
*/

function findLargestNum(vArray)
{
  let vLargestNum = vArray[0]; 

  for(let i=1; i < vArray.length; i++){

    if(vArray[i] > vLargestNum) 
    {
      vLargestNum = vArray[i];
    }
  }
  
  return vLargestNum;
}//findLargestNum

console.log(findLargestNum([7,88,99,2,1,4,66,100])); //100
console.log(findLargestNum([227,288,39,332,441,34,616,0])); //616


