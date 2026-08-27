import { useRouteError,useNavigate } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div className="error-container">
            <h2>An Error occured</h2>
            <p className="jobs-title">{error.message}</p>
            <button onClick={() => navigate('/')} className="get-start-button">Go to HomePage</button>
        </div>
    )
}
export default Error;