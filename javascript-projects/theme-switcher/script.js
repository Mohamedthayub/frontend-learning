const themeButton = document.querySelector("#theme-button");
const heading = document.querySelector('#heading');
themeButton.addEventListener("click",() => {
    if(themeButton.textContent == "Dark"){
        themeButton.textContent = "Light";
        document.body.style.backgroundColor = "black";
        themeButton.style.backgroundColor = "white";
        themeButton.style.color = "black";
        heading.style.color = "white"
    }
    else{
        themeButton.textContent = "Dark";
        document.body.style.backgroundColor = "White";
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";
        heading.style.color = "black";

    }
})
