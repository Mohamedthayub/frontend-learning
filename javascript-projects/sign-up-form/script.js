const userName = document.querySelector("#user-name");
const userPassword = document.querySelector("#user-password");
const userEmail = document.querySelector("#user-email");
const usernameError = document.querySelector('#username-error');
const userEmailError = document.querySelector('#email-error');
const userPasswordError = document.querySelector("#password-error");
const signUpButton = document.querySelector("#signup-button");

function validateUsername(username){
    usernameError.textContent = "";
    if(!username){
        usernameError.textContent = 'enter the username';
        return false;
    }
    if(username.length < 3){
        usernameError.textContent = 'username must be greater than 3 character';
        return false;
    }
    if(!/^[a-zA-Z]+$/.test(username)){
        usernameError.textContent = 'Username should contain only letters';
        return false;
    }
    return true;
}

function validateEmail(email){
    userEmailError.textContent = "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
        userEmailError.textContent = "enter the useremail";
        return false;
    }
    if(!emailPattern.test(email)){
        userEmailError.textContent = 'Invalid email';
        return false;
    }
    return true;
}



function validatePassword(password){
    userPasswordError.textContent = "";
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!password){
        userPasswordError.textContent = 'enter the password';
        return false;
    }
    if(password.length < 8){
        userPasswordError.textContent = 'Password should be at least 8 characters';
        return false;
    }
    if(passwordRegex.test(password)){
        userPasswordError.textContent =  'Password must contain uppercase, lowercase, number, special character and be at least 8 characters.'
        return false;
    }
    return true;
}



signUpButton.addEventListener("click",(e) =>{
    const isUsername = validateUsername(userName.value.trim());
    const isPassword = validatePassword(userPassword.value.trim());
    const isEmail  = validateEmail(userEmail.value.trim());
    

    if(!isUsername || !isPassword || !isEmail){
        e.preventDefault();
        alert("Sign Up Fail");
    }
    else{
        alert("Sign Up Success");
    }
});

