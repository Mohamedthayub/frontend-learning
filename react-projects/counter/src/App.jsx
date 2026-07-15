import {useState} from "react";
const App = () => {
  const [count,setCount] = useState(0);
  const increase = () => {
    setCount(prev => prev + 1);
  }
  const decrease = () => {
    setCount(prev => prev - 1);
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div className= "App">
      <h1>Counter App</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="btn-container">
          <button onClick={increase}>Increase</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrease}>Decrease</button>
        </div>
      </div>
    </div>
  )
}
export default App;