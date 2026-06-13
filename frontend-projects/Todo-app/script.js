const userInput = document.querySelector("#userinput");
const  addButton = document.getElementById("add-btn");
const todoItemContainer = document.querySelector('.todo-items-container');
const todoCountText = document.querySelector('.todo-count');
const themeButton = document.querySelector('.theme-button');
const bodyColor = document.querySelector('.body');
let todoCount = 0;

document.addEventListener("DOMContentLoaded",() => {
    console.log("the page loaded fully");
    todoCountText.textContent = `todo count is : ${todoCount}`; 
})

function validateInput(input){
    if(input == ""){
        alert("the input is empty");
        return false;
    }    
    return true;
}

function  createTodo(text){
    const  container = document.createElement("div");
    container.classList.add("todo-item");
    
    const todoItem = document.createElement("p");
    todoItem.classList.add("todo-text");
    todoItem.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("todo-delete");
    deleteButton.textContent = "delete";

    container.appendChild(todoItem);
    container.appendChild(deleteButton);
    todoItemContainer.appendChild(container);
    todoCount++;

    todoCountText.textContent =`todo count is : ${todoCount}`; 

    todoItem.addEventListener("click",() => {
        if(todoItem.classList.contains("done")){
            todoItem.classLilsst.remove("done");
        }
        else{
            todoItem.classList.add("done");  
        }
    });
    
    deleteButton.addEventListener("click",(e) => {
        e.target.parentElement.remove();
        todoCount--;
        todoCountText.textContent = `todo count is : ${todoCount}`; 
    });
}

function clearInput(){
    document.getElementById("userinput").value = "";
}

addButton.addEventListener("click",() => {
    if(validateInput(userInput.value)){
        createTodo(userInput.value);
        clearInput();   
    }
});




themeButton.addEventListener("click",() => {
    if(bodyColor.style.backgroundColor == "white"){
        bodyColor.style.backgroundColor = "black"; 
        todoCountText.style.color = "white";     
    }
    else{
        bodyColor.style.backgroundColor = "white";
        todoCountText.style.color = "black";
    }
})