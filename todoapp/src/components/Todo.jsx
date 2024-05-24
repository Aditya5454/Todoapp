import { useState } from "react";
import Todoitems from "./Todoitems";
import Footer from "./Footer";
import "./Todo.css";

export default function Todo() {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className="todo" onSubmit={handleSubmit}>
        <div className="display">
          <input
            className="moderninput"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            placeholder="Enter todo..."
          />
          <button className="modernbutton" type="submit">
            ADD
          </button>
        </div>
      </form>
      <div className="todolist">
        {sortedTodos.map((item) => (
          <Todoitems
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
