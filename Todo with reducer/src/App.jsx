import React, { useReducer, useState, useEffect } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case "CLEAR":
      return [];

    case "LOAD":
      return action.payload;

    default:
      return state;
  }
};

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      dispatch({
        type: "LOAD",
        payload: JSON.parse(saved),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editId) {
      dispatch({
        type: "EDIT",
        payload: { id: editId, text: input },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: input,
      });
    }

    setInput("");
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Smart Todo</h1>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task..."
        />

        <button onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>

      <p>Total Tasks: {todos.length}</p>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() =>
                dispatch({
                  type: "TOGGLE",
                  payload: todo.id,
                })
              }
            >
              {todo.text}
            </span>

            <div>
              <button onClick={() => handleEdit(todo)}>
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE",
                    payload: todo.id,
                  })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="clear"
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;