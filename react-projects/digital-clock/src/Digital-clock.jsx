import { useEffect, useState } from "react";
const DigitalClock = () => {
    const [time , setTime] = useState(new Date());

    useEffect(() => {
        const interverId = setInterval(() => {
            setTime(new Date());
        },1000);   

        return () => {
            clearInterval(interverId);
        }   
    },[]);
    function formatTime(){
        let hours =  time.getHours();
        const minutes  = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12;
        
        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}  ${meridiem}`;
    }
    function padZero(number){
        return number < 10 ? "0" + number : number; 
    }
    return (
        <div className="clock-container">
            <span>{formatTime()}</span>
        </div>
    )
}

export default DigitalClock;