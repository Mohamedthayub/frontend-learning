import {useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="heading">Contact Page</h1>
            <div className="btn-container">
                <button onClick={() => navigate('info')} className="info-button">Contact Info</button>
                <button onClick={() => navigate('form')} className="form-button">Contact Form</button>
            </div>
        </div>
    )
}
export default Contact;