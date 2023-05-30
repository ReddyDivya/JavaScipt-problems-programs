const array = [1, 22, 33, 3, 44, 4, 55, 7, 55, 44, 33, 22, 1];

//even numbers
const evenNumbers  = array.filter((currentValue, index, arr) => currentValue % 2 === 0);
console.log(evenNumbers );

//odd numbers
const oddNumbers = array.filter((currentValue, index, arr) => currentValue % 3 == 0);
console.log(oddNumbers);
