//factorial
/*
factorial(5);//120
factorial(4);//24

Method 1:
*/
const factorial = (n) => {
    return n > 0 ? n*factorial(n-1) : 1;
}

//Method 2:
const factorial = (n) => {
    let result = 1;
    
    for(let i=1; i<=n; i++)
    {
        result *= i;
    }
    
    return result;
}

console.log(factorial(5));//120
console.log(factorial(4));//24
console.log(factorial(0));//1
