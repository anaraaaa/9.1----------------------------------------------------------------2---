import React from "react";
import TodoView from "./TodoView/TodoView";

const Home = ({ todos, addTodo, removeTodos, changeTodos }) => {
  return (
    <div>
      {todos.map(({ id, ...otherprops }) => (
        <TodoView
          key={id}
          {...otherprops}
          changeTodos={changeTodos}
          addTodo={addTodo}
          removeTodos={removeTodos}
        />
      ))}
    </div>
  );
};

export default Home;
