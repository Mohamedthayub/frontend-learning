import Navbar from "./Navbar";
import ThemeProvider from "../ThemeProvider";
const App = () => {
    return (
        <div className="App">
            <ThemeProvider>
                <Navbar/>
            </ThemeProvider>
        </div>
    )
}
export default App;