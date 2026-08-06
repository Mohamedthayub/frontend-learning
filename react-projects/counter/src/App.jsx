import {useState} from "react";
import useCount from "./useCount";
const App = () => {
  const {count,increase,reset,decrease} = useCount();
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