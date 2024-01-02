//FizzBuzz
/*
number is a multiple of 3, then print fizz
number is a multiple of 5, then print buzz
number is a multiple of 3 and 5, then print fizzbuzz
*/

const fizzbuzz = (n) => {

    for(let i=1; i<=n; i++)
    {
        let str = "";

        if(i%3 === 0)
            str += "fizz";
        
        if(i%5 === 0)    
            str += "buzz";
        
        if(str === "") 
            str = i;

        console.log(str);
    }
}

fizzbuzz(15);
