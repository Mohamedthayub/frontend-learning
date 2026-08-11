import ChildComponent from "./components/child";
const App = () => {
  const data = "this data come from parent"
  return (
    <div className="app">
      <h1>This is Parent Component</h1>
      <ChildComponent data = {data}/>
    </div>
  )
}
export default App;