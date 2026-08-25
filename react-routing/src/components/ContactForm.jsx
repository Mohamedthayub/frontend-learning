const ContactForm  = () => {
    return (
        <div>
            <form>
                <div className="email-container">
                    <label htmlFor="">Email : </label>
                    <input type="email"/>
                </div>
                <div className="passoword-container">
                    <label htmlFor="">Email : </label>
                    <input type="email"/>
                </div>
                <div className="button-contianer">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;