import React from "react";
import { ACTIONS } from "./App.js";

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
          }
        >
          Edit
        </button>
      </span>
    </div>
  );
}

export default Todo;
