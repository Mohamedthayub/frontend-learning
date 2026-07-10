const clock_hour = document.querySelector('.hour');
const clock_minute = document.querySelector('.minute');
const clock_second = document.querySelector('.second');
const clock_ampm = document.querySelector('.ampm');


function showTime(){
    const now = new Date();
    let hours  = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    const ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = String(hours).padStart(2,"0");
    
    clock_hour.textContent = hours;
    clock_minute.textContent = minutes;
    clock_second.textContent = seconds;
    clock_ampm.textContent = ampm;
    
}
showTime();
setInterval(showTime,1000);

