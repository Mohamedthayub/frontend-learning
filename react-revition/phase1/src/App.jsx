import useInput from "./useInput";
const App = () => {
  const {input,clearInput,handleInput} = useInput("");
  return (
    <div>
      <input type="text" value={input} onChange={(e) =>handleInput(e.target.value) }/>  
      <button onClick={clearInput}>clear</button> 
    </div>
  )
}
export default App;