import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = todoText.current!.value;

    if (text.trim().length === 0) {
      return;
    }

    console.log(todosCtx);
    todosCtx.addTodo(text);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoText} />
      <button>Add Text</button>
    </form>
  );
};

export default NewTodo;
