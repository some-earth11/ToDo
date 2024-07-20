import { useState, useEffect } from 'react';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    console.log('Loading...');
    const timer = setTimeout(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
      setLoading(false);
      console.log('Loaded');
    }, 2000); // Simulate delay for lazy loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return { todos, setTodos, loading };
};

export default useTodos;
