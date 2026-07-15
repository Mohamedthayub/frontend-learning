import { useState } from "react";
const App = () => {
  const [theme ,setTheme]  = useState("Dark");
  const btnClick = () => {
    setTheme(prev => prev === "Dark" ? "Light" : "Dark");
  }
  return (
    <div className="App" style={{
      display:"flex",
      justifyContent:"center",
      "alignItems":"center",
      "flexDirection":"column",
      "height":"100vh",
      "backgroundColor": theme === "Dark" ? "white" : "black"
    }}>
      <h1 style={{
        color:theme === "Dark" ? "black" : "white"
      }}>Theme Switcher</h1>
      <div className="btn-container">
        <button onClick={btnClick} style={{
          "backgroundColor":theme === "Dark" ? "black" : "white",
          "color" : theme === "Dark" ? "white" : "black"
        }}>{theme}</button>
      </div>
    </div>
  )
}
export default App;