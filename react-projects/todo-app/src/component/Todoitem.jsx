import tick from "../Assets/tick.png";
import not_tick from "../Assets/not_tick.png";
import cross from "../Assets/cross.png";
import "../CSS/Todoitem.css"
const TodoItems = ({no,text,display,setTodo}) => {

    const deleteTodo = (no) => {
        const data = JSON.parse(localStorage.getItem("todos") || []);
        const filteredData = data.filter((todo) => todo.no != no);
        setTodo(filteredData);
        localStorage.setItem('todos',JSON.stringify(filteredData));
    }
    const toggle = (userno) => {
        const data = JSON.parse(localStorage.getItem("todos") || []);
        for(let i = 0; i<data.length; i++){
            if(data[i].no == userno){
                if(data[i].display == ""){
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodo(data);
        
    }
    return (
        <div className="todoitems">
            <div className={`todoitem ${display}`} onClick={() => toggle(no)}>
                {
                    display == "" ? <img src={not_tick}></img> : <img src={tick}></img>
                }
                <p className="todo-text">{text}</p>
                <button className="delete-button" onClick={() => deleteTodo(no)}>Delete</button>
            </div>
        </div>
    )
}
export default TodoItems;