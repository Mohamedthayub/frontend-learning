import { useState } from "react";
const App = () => {
  const [count,setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  }
  console.log("Rendering ....");
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  )
}
export default App;