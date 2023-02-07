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
  
