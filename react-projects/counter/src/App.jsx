import {useState} from "react";
const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div className= "App">
      <h1>Counter App</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="btn-container">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>
    </div>
  )
}
export default App;