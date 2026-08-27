import { NavLink } from "react-router-dom";
const Navbar  = ()  => {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
            </ul>
            <div className="btn-container">
                <button className="get-start-button">Get Started</button>
            </div>
        </div>
    )
}
export default Navbar;