import React from "react";
import Check from "../Check/Check";
import Remove from "../Remove/Remove";

const CompletedItem = ({ todo, removeTodos }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <div className="flex">
        <Check isCompleted={todo.isCompleted} />
        <span className="line-through">{todo.title}</span>
      </div>
      <Remove todo={todo} removeTodos={removeTodos} />
    </div>
  );
};

export default CompletedItem;
