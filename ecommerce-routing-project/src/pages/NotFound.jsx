import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="heading">404 Page Not Found</h1>
            <div className="btn-container">
                <button onClick={() => navigate('/')} className="btn">Go to Home</button>
            </div>
        </div>
    )
}
export default NotFound;