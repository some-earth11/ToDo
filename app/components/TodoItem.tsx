import Image from "next/image";
import { Todo } from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex flex-row my-2 items-center max-w-[60] min-h-10 rounded-xl shadow-xl bg-red-400">
      <div className="justify-items-start min-w-[45vh]">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="font-medium" style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "gray" : "black" }}>
          {todo.title}
        </span>
      </div>
      <button className="justify-items-end mx-20" onClick={() => deleteTodo(todo.id)}>
        <Image alt="todo delete" src={'/delete.svg'} width={15} height={15} />
      </button>
    </div>
  );
};

export default TodoItem;
