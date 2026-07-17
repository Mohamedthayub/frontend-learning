const Form = () => {
    return (
        <div className="form">
            <h1>Sign in Form</h1>
            <div className="username-container">
                <label htmlFor="">Username:</label>
                <input type="text"/>
            </div>
            <div className="email-container">
                <label htmlFor="">Email :</label>
                <input type="email" />
            </div>
            <div className="password-container">
                <label htmlFor="">Password:</label>
                <input type="password" />
            </div>
            <div className="btn-container">
                <button>Sign in</button>
            </div>
        </div>
    )
}
export default Form;