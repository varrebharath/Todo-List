import React, { useEffect, useRef, useState } from "react";
import TodoList from "./component/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
const LOCAL_STORAGE_KEY = "todoApp.todos";
function App() {
  const [todos, setTodos] = useState([]);
  const toDoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    storage(newTodos);
  }
  function storage(data) {
    setTodos(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }
  function handleAddTodo() {
    const todo = {
      id: uuidv4(),
      name: toDoNameRef.current.value,
      complete: false,
    };
    const updateTodos = [...todos, todo];
    storage(updateTodos);
  }
  function handleClearTodo() {
    const newTodos = todos.filter((todo) => !todo.complete);
    storage(newTodos);
  }
  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={toDoNameRef} type="text"></input>
      <button className="btn btn-primary" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="btn btn-danger" onClick={handleClearTodo}>
        Clear Completed Todos
      </button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
