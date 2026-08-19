import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li >Contact</li></Link>
            </ul>
            <div className="btn-container">
                <button className="get-start-button">Get Started</button>
            </div>
        </div>
    )
}
export default Navbar;