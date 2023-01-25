import { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const addTodo = (value1) => {
    setTodos([...todos, { text: value1 }]);
  };

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(event.target.elements.todo.value);
          event.target.elements.todo.value = " ";
        }}
      >
        <input type="text" name="todo" placeholder="Add Todo" />
        <button type="submit">Add</button>
      </form>
      <div className="toDoList">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button
                onClick={(e) => {
                  e.target.closest("li").remove();
                }}
              >
                <FaTrash />
              </button>
              <button
                onClick={(e) =>
                  (e.target.closest("li").style.textDecoration = "line-through")
                }
              >
                <FaCheck />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
