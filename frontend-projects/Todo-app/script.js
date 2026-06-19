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
});


function getData() {
    todoItemContainer.innerHTML = localStorage.getItem("todo-data");
    todoCount =  localStorage.getItem("todo-count") || 0;
    todoCountText.innerHTML = `todo count is ${todoCount}`;

}


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
    
    const  todoItem = document.createElement("p");
    todoItem.classList.add("todo-text");
    todoItem.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("todo-delete");
    deleteButton.textContent = "delete";

    container.appendChild(todoItem);
    container.appendChild(deleteButton);
    todoItemContainer.appendChild(container);
    todoCount++;
    saveData();

    todoCountText.textContent =`todo count is : ${todoCount}`; 

    todoItem.addEventListener("click",() => {
        if(todoItem.classList.contains("done")){
            todoItem.classList.remove("done");
        }
        else{
            todoItem.classList.add("done");  
        }
    });
}

todoItemContainer.addEventListener("click", (e) => {
    if(e.target.textContent == "delete"){
        e.target.parentElement.remove();
        todoCount--;
        todoCountText.textContent = `todo count is : ${todoCount}`; 
        saveData();
    }
})

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
        themeButton.textContent = "Light"
        todoCountText.style.color = "white";
    }
    else{
        bodyColor.style.backgroundColor = "white";
        todoCountText.style.color = "black";
        themeButton.textContent = "Dark";
    
    }
});


function saveData(){
    localStorage.setItem("todo-data",todoItemContainer.innerHTML) ;  
    localStorage.setItem("todo-count",todoCount);

}


getData();

