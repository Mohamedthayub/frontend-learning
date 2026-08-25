import {NavLink} from "react-router-dom";
const Navbar  = () => {
    return (
        <div className="navbar">
            <h2>Navbar</h2>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
            </ul>
            <button className="get-start-button">
                Get Start
            </button>
        </div>
    )
}
export default Navbar;