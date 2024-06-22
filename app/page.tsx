"use client"
import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import useTodos, { Todo } from "./hooks/useTodos";

export default function Home() {
  const [todoInput, setTodoInput] = useState<string>('');
  const { todos, setTodos } = useTodos();

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const resetTodos = () => {
    setTodos([]);
    localStorage.setItem('todos', '[]');
  };

  return (
    <div>
      <main className="min-h-[96vh] min-w-screen bg-red-400 bg-[url('../public/background.svg')] flex flex-col items-center justify-center">
        <div className="todo-container rounded-2xl min-w-[85vw] min-h-[85vh] flex flex-col justify-start bg-white text-red-400 shadow-2xl">
          <Header resetTodos={resetTodos} />
          <TodoInput todoInput={todoInput} setTodoInput={setTodoInput} addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
