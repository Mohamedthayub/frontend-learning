const numbers  = [1,2,3];
console.log(...numbers);


const original  = [2,3,4,5];
const copy = [...original]; // here we copy the  array values;
console.log(copy);

let number1  = [1,2,3,4];
let number2 = [5,6,7,8];

const fullNumbers = [...number2,...number1];
console.log(fullNumbers); //  we combine the both array value into single array;


/*
JavaScript Spread (...) and Rest (...) Operators

One of the most confusing things for beginners is that spread and rest use the exact same syntax:

...

But they do completely different jobs.

A simple way to remember them is:

Spread → Expands

Rest → Collects

*/
// Rest Operator is used to Expand the values 