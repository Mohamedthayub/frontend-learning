import { useState } from "react";

const Form = () => {
    const [error , setError] = useState({
        usernameError:"",
        emailError:"",
        passwordError:"",
        confirmPasswordError:""
    })
    const [username, setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [shPassword,shShowPassword] = useState("password");
    const [message,setMessage] = useState({
        success:false,
        message:""
    });
    
    function validateUsername () {
        if(username.trim()  === ""){
            setError((prev) => ({
                ...prev,usernameError:"Username is required"
            }))
            return false;
        }
        if(username.length < 3){
            setError((prev) => ({
                ...prev,usernameError: "Username must be at least  character",
            }))
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(username)){
            setError((prev) => ({
                ...prev, usernameError:"Username should contain only letter",
            }))
            return false;
        }
        setError((prev) => ({
            ...prev,usernameError:""
        }));
        
        return true;
    }
    function validateEmail(){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email.trim()  === ""){
            setError((prev) => ({
                ...prev,emailError:"Email is required"
            }));
            return false;
        }
        if(!emailPattern.test(email)){
            setError((prev) => ({
                ...prev, emailError:"Invalid email"
            }))
            return false;
        }
        setError((prev) => ({
            ...prev,emailError:""
        }));
        return true;
    }
    function validatePassword(){
        const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(password.trim() === ""){
            setError((prev) => ({
                ...prev, passwordError:"Password is required"
            }));
            return false;
        }
        if(!passwordRegex.test(password)){
            setError((prev) => ({
                ...prev, passwordError:"Password must contain uppercase, lowercase, number, special character and be at least 8 characters."
            }))
            return false;
        }
        setError((prev) =>({
            ...prev,passwordError:""
        }))
        return  true;
    }
    function validateConfirmPassword(){
        if(confirmPassword.trim() === ""){
            setError((prev) => ({
                ...prev,confirmPasswordError:"confirm password is required"
            }))
            return false;
        }
        if(password.trim() !== confirmPassword.trim()){
            setError((prev) => ({
                ...prev,confirmPasswordError:"password do not match"
            }))
            return false;
        }
        setError((prev) => ({
            ...prev,confirmPasswordError:""
        }))

        return true;
    }

    const  isValid = (e) => {
        e.preventDefault();

        const validUsername =  validateUsername();
        const validEmail = validateEmail();
        const validPassword = validatePassword();
        const validConfirmPassword = validateConfirmPassword();
        if(validUsername && validEmail && validPassword && validConfirmPassword){
            setMessage({
                success:true,
                message:"Sign Up Successful"
            });        
        }
        else{
            setMessage({
                success:false,
                message:"Please correct the highlighted fields."
            });
        }
    }
    const showPassword = () => {
        if(shPassword == "password"){
            shShowPassword("text");
        }        
        else{
            shShowPassword("password");
        }
    }
    return (
        <form className="form" onSubmit={isValid}>
            <h1>Sign in Form</h1>
            <div className="username-container">
                <label htmlFor="username">Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username"/>
                <span>{error.usernameError}</span>
            </div>
            <div className="email-container">
                <label htmlFor="email">Email :</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email"/>
                <span>{error.emailError}</span>
            </div>
            <div className="password-container">
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  id="password"/>
                <span>{error.passwordError}</span>
            </div>
        
            <div className="confirm-password-container">
                <div className="password-show-icon">
                    <p onClick={showPassword}>👁️Show</p>
                </div>
                <div className="inside-container">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type={shPassword} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirm-password"/>
                    <span>{error.confirmPasswordError}</span>
                </div>
            </div>
            <div className="btn-container">
                <button type="submit">Sign in</button>
            </div>
            <p className="message" style={{
                color:message.success  ? "green" : "red"
            }}>{message.message}</p>
        </form>
    )
}
export default Form;