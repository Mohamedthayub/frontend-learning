import "../CSS/Todoitem.css";
import tick from "../Assets/tick.png";
import not_tick from "../Assets/not_tick.png";
import cross_icon from "../Assets/cross.png";

const Todoitems = ({ no, text, display, setTodos }) => {

  const toggle = (no) => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];

    const updatedTodos = data.map((todo) =>
      todo.no === no
        ? {
            ...todo,
            display: todo.display === "" ? "line-through" : "",
          }
        : todo
    );
    console.log(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const deleteTodo  = (no) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const filteredTodo = todos.filter((todo ) => todo.no != no);
    setTodos(filteredTodo);
  }
  
  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => toggle(no)}
      >
        <img
          src={display === "" ? not_tick : tick}
          alt="status"
        />

        <div
          className="todoitems-text"
          style={{
            textDecoration: display,
          }}
        >
          {text}
        </div>
      </div>

      <img
        src={cross_icon}
        alt="delete"
        className="todoitems-cross-icon"
        onClick={() => deleteTodo(no)}
      />
    </div>
  );
};

export default Todoitems;