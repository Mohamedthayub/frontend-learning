import { useEffect, useRef, useState } from "react";
import "../CSS/Todo.css";
import TodoItems from "./Todoitem";
// import { preview } from "vite";
let index  = 0;
const Todo = () => {
    const [todos,setTodos] = useState([]);
    const inputRef = useRef(null);
    const [todocount,setTodocount]  = useState(0);
    const addData  =  () => {
        if(inputRef.current.value == ""){
            alert("it should not be empty");
        }
        else{
            setTodocount(todocount + 1);
            setTodos([...todos,{no:index++,text:inputRef.current.value,display:""}]);
            setTodocount(todocount + 1);
            inputRef.current.value = "";
        }
    }
    useEffect(() => {
        index = localStorage.getItem("todos-index") || 0;
        setTodos(JSON.parse(localStorage.getItem("todos")) || []);

    },[]);
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('todos',JSON.stringify(todos));
            localStorage.setItem('todos-index',index);
        },100);
    },[todos]);

    return (
        <div className="Todo">
            <h1>Todo Project</h1>
            <p>Todo Count : {todocount}</p>
            <div className="user-input">
                <input type="text" ref={inputRef} />
                <button onClick={addData} className="add-btn" on>ADD</button>
            </div>
            <div className="todoitems">
                {
                    todos.map((todo,index) => {
                        return <TodoItems key={index} no = {todo.no} text = {todo.text} display = {todo.display} setTodo = {setTodos}/>
                    })
                }
            </div>
        </div>
    )
}
export default Todo;