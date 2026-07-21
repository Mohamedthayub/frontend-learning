import { useState,useEffect } from "react";
import pattern_divider from "./images/pattern-divider-desktop.svg";
import dice_button from "./images/icon-dice.svg";
const AdviceGenerator = () => {
    const [advice,setAdvice] = useState({})
    async function fetchAdvice(){
        try{
            const response = await fetch("https://api.adviceslip.com/advice")
            const advice = await response.json();
            setAdvice(advice.slip);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {        
        fetchAdvice();
    },[]);
    return (
        <div className="advice-container">
            <div className="container">
                <p>ADVICE {advice.id}</p>
                <h2>{advice.advice}</h2>
                <div className="img-container">
                    <img src={pattern_divider} alt="play button" />
                </div>
                <div className="button-container">
                    <img src={dice_button} alt="dice-button" onClick={fetchAdvice}/>
                </div>
            </div>
        </div>
    )
}
export default AdviceGenerator;