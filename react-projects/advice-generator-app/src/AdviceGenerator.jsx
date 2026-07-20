import { useState,useEffect } from "react";
const AdviceGenerator = () => {
    async function fetchAdvice(){
        try{
            const response = await fetch("https://api.adviceslip.com/advice")
            const advice = await response.json();
            console.log(advice);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchAdvice();
    return (
        <div className="advice-container">
            <div className="container">
                <p>ADVICE 1223</p>
            </div>
        </div>
    )
}
export default AdviceGenerator;