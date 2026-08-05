import { useState } from "react";

function  useInput (initialValue = "") {
    const [input,setInput] = useState();
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const clearInput = () => {
        setInput(initialValue);
    }
    return {input,clearInput,handleInput};
}
export default useInput;