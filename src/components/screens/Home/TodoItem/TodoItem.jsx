import React from "react";
import Check from "../Check/Check";
import Remove from "../Remove/Remove";

const TodoItem = ({ todo, changeTodos, removeTodos }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button
        className="flex items-center"
        onClick={() => changeTodos(todo._id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <div className="flex flex-col">
          <span className="flex">{todo.title}</span>
          <span className="flex">Added - {todo.day}</span>
        </div>
      </button>
      <Remove todo={todo} removeTodos={removeTodos} />
    </div>
  );
};

export default TodoItem;
