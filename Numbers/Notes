### Numbers

number: a numeric data type in the double-precision 64-bit floating-point format (IEEE 754). Examples are -6, -2.4, 0, 0.1, 1, 3.14, 16.984025, 25, 976, 1024.0 and 500000.
bigint: a numeric data type that can represent integers in the arbitrary precision format. Examples are -12n, 0n, 4n, and 9007199254740991n.

If you require arbitrary precision or work with extremely large numbers, use the bigint type. Otherwise, the number type is likely the better option.

### Rounding

There is a built-in global object called Math that provides various rounding functions. 
For example, you can round down (floor) or round up (ceil) decimal numbers to nearest whole numbers.

Math.floor(234.34); // => 234
Math.ceil(234.34); // => 235

--
### Arithmetic Operators

JavaScript provides 6 different operators to perform basic arithmetic operations on numbers.

+: The addition operator is used to find the sum of numbers.
-: The subtraction operator is used to find the difference between two numbers
*: The multiplication operator is used to find the product of two numbers.
/: The division operator is used to divide two numbers.
%: The remainder operator is used to find the remainder of a division performed.
**: The exponentiation operator is used to raise a number to a power.


## Order of Operations
When using multiple operators in a line, JavaScript follows an order of precedence as shown in this precedence table. 
To simplify it to our context, JavaScript uses the PEDMAS (Parentheses, Exponents, Division/Multiplication, Addition/Subtraction) rule
we've learnt in elementary math classes.

Example:
const result = 3 ** 3 + 9 * 4 / (3 - 1);
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45

### Shorthand Assignment Operators

Shorthand assignment operators are a shorter way of writing code conducting arithmetic operations on a variable, and assigning the new value to the same variable.
For example, consider two variables x and y. Then, x += y is same as x = x + y. Often, this is used with a number instead of a variable y. 
The 5 other operations can also be conducted in a similar style.

let x = 5;
x += 25; // x is now 30

let y = 31;
y %= 3; // y is now 1
