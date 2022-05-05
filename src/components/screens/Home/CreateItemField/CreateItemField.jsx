import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const CreateItemField = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center mb-4 rounded-2xl border-zinc-800 p-5 w-full border-2">
      <button className="mr-4" onClick={() => addTodo(value)}>
        <BsPlusCircleFill color="hotpink" size={24} />
      </button>
      <input
        className="bg-transparent w-full border-none outline-none"
        placeholder="Добавить задачу"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          return e.key === "Enter" && addTodo(value);
        }}
      />
    </div>
  );
};

export default CreateItemField;

// addTodo(value)
