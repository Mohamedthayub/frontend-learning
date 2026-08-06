import { useState } from "react";
function useCount(){
    const [count,setCount] = useState(0);
    
    const increase = () => {
        setCount(prev => prev + 1);
    }
    const reset = () => {
        setCount(0);
    }
    const decrease = () => {
        setCount(prev => prev - 1);
    }
    return {count,increase,reset,decrease} ;

}
export default useCount;