import React, { useReducer, useState } from "react";
import "fontsource-roboto";
import "./App.css";
import Todo from "./Todo";

// this reducer takes in the current state
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isEditableState: !todo.isEditableState,
            previousContent: todo.name,
            name: action.payload.name,
          };
        }
      });

    default:
      break;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
    previousContent: "",
    isEditableState: false,
  };
}

function editTodo(name, id) {}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}

      {/* {todos.map((todo) => {
        <Todo key={todo.id} todo={todo} />;
      })} */}
    </div>
  );
}

export default App;
