// ---------------------------------> Map Fuctions;

// convert each number into sqaure
let number = [1,2,3,4,5];

let squares = number.map((num) => num * 2);

console.log(squares);


// convert lowercase into uppercase
let names = ["one","two","three","four"];

const upperCase = names.map((word) => word.toUpperCase());

console.log(upperCase);



// ---------------------------------> Filter Fuctions;
// convert each number into even number
let evenNumbers  = number.filter((num) => num % 2 == 0);

console.log(evenNumbers);


// convert each number into odd number

let oddNumbers = number.filter((num) => num % 2 != 0);

console.log(oddNumbers);


/*
[
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
]
*/
let product = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
]
let productCost  = product.filter((product) => product.price >  1000);

console.log(productCost);
// ---------------------------------> Reduce Functions;
// sum of the total number 

let numbers = [1,2,3,4,5];

let totalSum = numbers.reduce((num,acc) => {
    return num + acc;
},100);

console.log(totalSum);

/*Find words longer than 5 characters.
["apple", "elephant", "cat", "banana"]

Expected:

["elephant", "banana"] */


let friuts = ["apple", "elephant", "cat", "banana"];

let lengthFruit  = friuts.filter((fruit) => {
    return fruit.length > 5
});
console.log(lengthFruit);



// sum of the cart item;;


let cartItem = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
let totalPrice = cartItem.reduce((acc,item) => {
    return acc + item.price;

},0); 
console.log(totalPrice);

// find the largest number 

let arrNumber = [7,12,3,25,9];

let largestNumber = arrNumber.reduce((acc,num) => {
    return acc > num;
},0);
console.log("The Largest number in the array" + largestNumber);


// ["hi", "hello", "javascript"]

let words = ["hi", "hello", "javascript"];

let output = words.reduce((acc,num) => {
   return  acc +  num.length;
    
},0);
console.log(output);
