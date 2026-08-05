import { useState } from "react"

const useToggle = () => {
    const [toggle,setToggle] = useState(false);

    const set = () => {
        setToggle(!toggle);
    }
    return {toggle,set}
}
export default useToggle;