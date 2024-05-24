import "./Todoitems.css";
export default function Todoitems({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete button", item);
    setTodos(todos.filter((todo) => todo != item));
  }
  function handleClick(name) {
    setTodos(todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo)
    );
    
  }
  const cName = item.done ? "completed" : "";
  return (
    <div className="item">
      <div className="itemName">
        <span className={cName}onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={() => handleDelete(item)} className="btn">
            x
          </button>
        </span>
      </div>
      <hr className="line"></hr>
    </div>
  );
}
