import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <form>
                <div className="email-container">
                    <label htmlFor="">Email:</label>
                    <input type="text"/>
                </div>
                <div className="password-container">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <div className="btn-container">
                    <button className="btn" type="submit" onClick={() => navigate('/dashboard',{replace:true})}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;