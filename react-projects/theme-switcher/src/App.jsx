import { useState } from "react";

const App = () => {
  const [theme,setTheme] = useState("Dark");
  const AppStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh',
    flexDirection:'column',
    backgroundColor:theme == "Dark" ? setTheme("white") : setTheme("black")
  }
  const btnStyle = {
    width:'150px',
    borderRadius:'10px',
    padding:'10px',
    fontWeight:'bold',
    fontSize:'15px'    
  }
  return (
    <div className="app" style={AppStyle}>
      <h1>Theme Switcher</h1>
      <div className="btn-container">
        <button onClick={() => (theme == 'Dark') ? setTheme('Light') : setTheme("Dark")} style={btnStyle}>{theme}</button>
      </div>
    </div>
  )
}
export default App;