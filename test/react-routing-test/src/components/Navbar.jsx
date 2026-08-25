import {Link} from "react-router-dom";
const Navbar  = () => {
    return (
        <div className="navbar">
            <h2>Navbar</h2>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            <button className="get-start-button">
                Get Start
            </button>
        </div>
    )
}
export default Navbar;