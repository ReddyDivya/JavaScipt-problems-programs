//factorial
/*
factorial(5);//120
factorial(4);//24
*/
const factorial = (n) => {
    return n > 0 ? n*factorial(n-1) : 1;
}

console.log(factorial(5));//120
console.log(factorial(4));//24
console.log(factorial(0));//1
