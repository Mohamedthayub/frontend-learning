const ContactForm = () => {
    return (
        <div>
            <div className="email-container">
                <label htmlFor="">Email :</label>
                <input type="email"/>
            </div>
            <div className="password-container">
                <label htmlFor="">Password:</label>
                <input type="password" />
            </div>
            <button type="submit">Submit</button>
        </div>
    )
}
export default ContactForm;