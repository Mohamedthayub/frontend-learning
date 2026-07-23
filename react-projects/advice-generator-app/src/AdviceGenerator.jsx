import { useState,useEffect } from "react";
import pattern_divider from "./images/pattern-divider-desktop.svg";
import dice_button from "./images/icon-dice.svg";
const AdviceGenerator = () => {
    const [advice,setAdvice] = useState({
        id:"",
        advice:""
    })
    const [loading , setLoading] = useState(false);
    const [error,setError] = useState("");
    async function fetchAdvice(){
        try{
            setLoading(true);
            const response = await fetch("https://api.adviceslip.com/advice")
            const advice = await response.json();
            setAdvice(advice.slip);
        }
        catch(err){
            setError(err.message || "Something went wrong");
            setLoading(true)
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(() => {        
        fetchAdvice();
    },[]);
    
    return (
        <div className="advice-container">
            <div className="container">
                <p> {loading ? "Loading ...": `ADVICE ${advice.id}`}</p>
                <h2>{loading ? "Loading ..." : advice.advice}</h2>
                <div className="img-container">
                    <img src={pattern_divider} alt="play button" />
                </div>
                <div className="button-container">
                    <button onClick={fetchAdvice} disabled= {loading} className="button">{loading ? "loading" : "Generate Advice"}</button>
                </div>
            </div>
            <p className="error-message">{error}</p>
        </div>
    )
}
export default AdviceGenerator;