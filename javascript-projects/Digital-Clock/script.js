// const hour = document.querySelector('.hour');
// const minute = document.querySelector('.minute');
// const second = document.querySelector('.second');
// const ampm = document.querySelector('.ampm');

// const { data } = require("react-router");

// function time() {
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes  = now.getMinutes();
//     let seconds = now.getSeconds();
//     if(hours > 12){
//         hours =  hours - 12;
//         hour.textContent = hours;
//     }
   
// }

// setInterval(time,1000);


function showTime(){
    const now = new Date();
    let hours  = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    const ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = String(hours).padStart(2,"0");
    
    console.clear();
    console.log(`${hours} : ${minutes} : ${seconds} ${ampm}`);
}
showTime();
setInterval(showTime,1000);

