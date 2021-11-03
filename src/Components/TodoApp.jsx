import { useSelector } from "react-redux";

const TodoApp = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  return (
    <>
      <h1>Todo App</h1>
      {todos.map((todo) => {
        return (
          <div>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default TodoApp;
