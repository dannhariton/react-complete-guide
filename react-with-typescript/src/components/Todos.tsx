import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          onDeleteTodo={todosCtx.removeTodo.bind(null, item.id)}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
