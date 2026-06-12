let name = "Thayub";
const age = 122;
var city  = "Chennai";


console.log(name,age,city);

if(typeof name === "string"){
    console.log("Yes it is a String");
}
else{
    console.log("It is not a String");
}

const isLoggedin = undefined;
if(!isLoggedin){
    console.log("It has novalue");
}
else{
    console.log("It is has value");
}

for(let i = 1; i<=5; i++){
    console.log("i value is :", i);
}

let i = 1;
while(i < 5){
    console.log("i value is less than 5",i);
    i = i + 1;
}


let j = 0;
do {
    j++;
    console.log("Iteration :",j);
   
}
while(j <= 3);

let names = ["one","two","three","four"];


for(let name of names){
    console.log(name);
}

for(let i  = 1; i<= 50; i++){
    if(i % 2 == 0 && i == 24){
        break;
   } 
   else{
    console.log("i is : ",i);
   }
}

for(let n = 1; n <=10; n++){
    if(n == 5){
        continue;
    }
    else{
        console.log("N is :",n);
    }
}