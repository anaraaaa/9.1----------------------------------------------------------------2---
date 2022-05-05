import React from "react";
import { BsTrash } from "react-icons/bs";

const Remove = ({ removeTodos, todo }) => {
  return (
    <button
      onClick={() => {
        removeTodos(todo._id);
        console.log(todo._id);
      }}
    >
      <BsTrash
        size={24}
        className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
      />
    </button>
  );
};

export default Remove;
