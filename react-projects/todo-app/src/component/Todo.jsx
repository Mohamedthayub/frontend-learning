import { useEffect, useRef, useState } from "react";
import "../CSS/Todo.css"
import Todoitems from "./TodoItem";
let count = 0;
const Todo = () => {
    const [todos , setTodos ] = useState([]);
    const inputRef = useRef(null);
    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value = "";
        localStorage.setItem('todo-count',count);
    
    }
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || []);
        count = localStorage.getItem('todo-count');
    },[]);

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todos",JSON.stringify(todos));            
        },100)
    },[todos]);

    // console.log(todos);
    return (
        <div className="todo">
            <div className="todo-header">
                To-Do List
            </div>
            <div className="todo-add">
                <input type="text" placeholder="Add Your Task"  className="todo-input" ref={inputRef}/>
                <button className="todo-add-btn" onClick={add} >ADD</button>
            </div>
            <div className="todo-list">
                {
                    todos.map((item, index) => {
                        return <Todoitems key={index} no ={item.id} text ={item.text} display = {item.display} setTodos = {setTodos}/>
                    })
                }
            </div>
        </div>
    )
}
export default Todo;