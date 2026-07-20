const showTime = document.querySelector('.time');
const startButton = document.querySelector("#start-btn");
const stopButton = document.querySelector("#stop-btn");
const resetButton = document.querySelector("#reset-btn");


let count = 0;
let intervalid;

const  startTimer = () => {
    startButton.disabled = true;
    intervalid = setInterval(() => {
        count = count + 1;
        showTime.innerText = count;
    },1000);
}

const stopTimer = () => {
    startButton.disabled = false;
    console.log("stop timer called ...")
    if(intervalid){
        clearInterval(intervalid);
    }
}
const resetTimer = () => {
    startButton.disabled = false;
    if(intervalid){
        clearInterval(intervalid)
    }
    count = 0;  
    showTime.innerText = count; 
}

startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
resetButton.addEventListener("click",resetTimer);