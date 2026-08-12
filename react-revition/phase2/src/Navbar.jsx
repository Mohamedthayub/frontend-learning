import { useContext } from "react";
import ThemeContext from "../themeContext";
const Navbar = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <div className="navbar" >
            <h1>Navbar</h1>
            <nav>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Contact</p>
                <p>{theme}</p>
            </nav>
            <div className="btn-container">
                <button onClick={toggleTheme}>change</button>
            </div>
        </div>
    )
}
export default Navbar;