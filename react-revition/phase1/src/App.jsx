import { useState } from "react";

const App = () => {
  const [toggle,setToggle] = useState(false);
  const set = () => {
    setToggle(!toggle)
  }
  
  return (
    <div>
      {
        toggle && <h1>This is Toggle</h1>
      }
      <button onClick={set}>Set</button>
    </div>
  )
}
export default App;