import Image from "next/image";
import { ChangeEvent, KeyboardEvent } from "react";

interface TodoInputProps {
  todoInput: string;
  setTodoInput: (input: string) => void;
  addTodo: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ todoInput, setTodoInput, addTodo }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const EnterPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTodo();
    }
  };

  return (
    <div className="flex flex-row justify-center items-center max-w-full my-4">
      <input
        type="text"
        value={todoInput}
        onChange={handleInputChange}
        onKeyUp={EnterPressed}
        placeholder="Enter your todo..."
        className="bg-gray-100 font-normal text-base text-zinc-950 rounded-xl shadow-lg min-w-[30vw] p-2"
      />
      <button id="addbutton" className="text-red-200" onClick={addTodo}>
        <Image alt="tdl" src={'/add.svg'} width={35} height={35} />
      </button>
    </div>
  );
};

export default TodoInput;
