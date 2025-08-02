const TodoItem: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = (props) => {
  return <li onClick={props.onDeleteTodo}>{props.text}</li>;
};

export default TodoItem;
