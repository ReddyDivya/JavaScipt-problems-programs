## Boolean

JavaScript uses true and false to represent the two truth values of logic.

In JavaScript, for each of the three logical operations (AND, OR and NOT) there is a corresponding operator: &&, || and !. 

In general, there are rules regarding the order of the operations and, in this case, 

! (negation) is applied first, and 

then && (conjunction) and

then || (disjunction).

The order of operations between the operators can be overcome by using an operator with higher precedence: 

( ), named the 'Grouping operator' or simply said 'parentheses'. 

As a matter of fact, the ( ) operator has the highest precedence of all JavaScript operators.

---

## Operator precedence

Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

### Example

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log(a = b = 5);
// Expected output: 5
