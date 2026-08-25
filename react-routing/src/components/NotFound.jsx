import {useNavigate} from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="heading">Page Not Found</h1>
            <div className="btn-container">
                <button className="info-button" onClick={() => navigate('/')}>Go To Home</button>
            </div>
        </div>
    )
}
export default NotFound;