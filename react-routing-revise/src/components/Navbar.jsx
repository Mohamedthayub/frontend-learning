import { NavLink,useNavigate } from "react-router-dom";
const Navbar  = ()  => {
    const navigate = useNavigate();
    
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/products'><li>Products</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/jobs'><li>Jobs</li></NavLink>
            </ul>
            <div className="btn-container">
                <button className="get-start-button" onClick={() => navigate('/')}>Get Started</button>
            </div>
        </div>
    )
}
export default Navbar;