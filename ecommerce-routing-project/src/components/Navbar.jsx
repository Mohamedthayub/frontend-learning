import {NavLink} from  "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/cart'><li>Cart</li></NavLink>
                <NavLink to='/login'><li>Login</li></NavLink>
            </ul>
        </div>
    )
}
export default Navbar;