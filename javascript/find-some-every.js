// find function will return satisfy the first element in the array;

let number  = [1,2,3,4,5,6];

let result = number.find((num ) => num % 2 == 0);

console.log(result);

// find the employees in HR
const employees = [
    { name: "John", department: "IT" },
    { name: "Mary", department: "HR" },
    { name: "Sara", department: "HR" }
];

const employee = employees.find((emp) => emp.department === "HR");

console.log(employee);

// it returns first matching object;



/*
2. some()
What does it do?

some() checks whether at least one element satisfies a condition.

Think of it as:

"Is there anyone here who matches this condition?"

It returns:

true
false

*/

let numbers = [1,1,2,1,5];

const res = numbers.some((num) => num % 2 == 0);

console.log(res);

// output : true;



/*

3. every()
What does it do?

every() checks whether all elements satisfy a condition.

Think of it as:

"Does everyone pass this test?"

It returns:

true
false
*/

const  numbers2 = [1,2,3,4,12];

const result2 = numbers2.every((num ) =>  num > 10);

console.log(result2);

// output: false  because all numbers should be greater than  10;


// Check if all students passed.

const students = [
    { name: "Ali", mark: 85 },
    { name: "John", mark: 60 },
    { name: "Sara", mark: 40 }
];

const isPassed = students.every((std) => std.mark >= 50);

if(isPassed){
    console.log("All Student Passed");
}
else{
    console.log("Students are not Passed");
};


/*
Real-World Examples
find()

Login system:

users.find(user => user.email === enteredEmail);

"Find this user."

some()

Shopping cart:

cart.some(item => item.quantity === 0);

"Is any item out of stock?"

every()

Form validation:

fields.every(field => field.isValid);

"Are all fields valid?"
*/