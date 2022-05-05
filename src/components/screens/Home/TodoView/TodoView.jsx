import React from "react";
import CreateItemField from "../CreateItemField/CreateItemField";
import TodoItem from "../TodoItem/TodoItem";
import CompletedItem from "../TodoItemCompleted/CompletedItem";
const TodoView = ({ addTodo, removeTodos, changeTodos, title, items }) => {
  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold mb-10">{title}</h1>
      <CreateItemField addTodo={addTodo} />
      <span className="text-lg font-normal">
        Задачи -{"  "}
        {items.length - items.filter((t) => t.isCompleted === true).length}
      </span>
      {items.length !== 0 ? (
        items.map((item) =>
          item.isCompleted === false ? (
            <TodoItem
              key={item.id}
              todo={item}
              changeTodos={changeTodos}
              removeTodos={removeTodos}
            />
          ) : (
            ""
          )
        )
      ) : (
        <h3 className="text-2xl font-bold mb-10 flex items-center justify-center">
          Очистить список
        </h3>
      )}
      <span className="text-lg font-normal">
        Выполнено -{" "}
        {items.length - items.filter((t) => t.isCompleted === false).length}
      </span>
      {items.map((item) =>
        item.isCompleted ? (
          <CompletedItem
            key={item.id}
            todo={item}
            changeTodos={changeTodos}
            removeTodos={removeTodos}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default TodoView;
