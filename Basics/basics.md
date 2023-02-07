## Basics

It has a few primitives, and everything else is considered an object.
While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js.
JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

---

## (Re-)Assignment

- There are a few primary ways to assign values to names in JavaScript - using variables or constants. 

- Variables in JavaScript can be defined using the **const**, **let** or **var** keyword.

- A variable can reference different values over its lifetime when using let or var. 
For example, myFirstVariable can be defined and redefined many times using the assignment operator =

  ### Example

    let myFirstVariable = 1;
    myFirstVariable = 'Some string';
    myFirstVariable = new SomeComplexClass();
    
---
  In contrast to let and var, variables that are defined with const can only be assigned once. This is used to define constants in JavaScript.
  
  ### Example

    const MY_FIRST_CONSTANT = 10; // Can not be re-assigned.
    MY_FIRST_CONSTANT = 20;  //TypeError: Assignment to constant variable.
---

## Constant Assignment

- The const keyword can only assign a value to a const variable once. 

    ### Example
    
    const MY_MUTABLE_VALUE_CONSTANT = { food: 'apple' }; // This is possible
    MY_MUTABLE_VALUE_CONSTANT.food = 'pear';     
    MY_MUTABLE_VALUE_CONSTANT; // { food: "pear" }
---

## Constant Value (Immutability)

- Technically the values can be changed. 
- use Object.freeze(value).

  ### Example
  
  const MY_VALUE_CONSTANT = Object.freeze({ food: 'apple' });

  // This silently fails
  
  MY_VALUE_CONSTANT.food = 'pear';

  MY_VALUE_CONSTANT;  // => { food: "apple" }
--- 

## Function Declarations

- Units of functionality are encapsulated in functions, usually grouping functions together in the same file if they belong together. 
- These functions can take parameters (arguments), and can return a value using the return keyword. Functions are invoked using ()

  ### Example
  
  function add(num1, num2) {
    return num1 + num2;
  }

  add(1, 3); // => 4
---

## Export and Import

- The export and import keywords are powerful tools that turn a regular JavaScript file into a JavaScript module.
- Apart from allowing code to selectively expose components, such as functions, classes, variables and constants, it also enables a whole range of other features, such as:
    **Renaming exports and imports**, which allows you to avoid naming conflicts,
    **Dynamic Imports**, which loads code on demand,
    
    ### Example
    
    // file.js
      export const MY_VALUE = 10;

      export function add(num1, num2) {
        return num1 + num2;
      }

    // file.spec.js
    import { MY_VALUE, add } from './file';

    add(MY_VALUE, 5); // => 15 
  
