"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Todo{
  id: number; 
  title: string;
  completed: Boolean;
}

export default function Home() {
  //states for todo input and the list of created todos
  const [todoInput, setTodoInput] = useState<string> ('');
  const [todos, setTodos] = useState<Todo[]> ([]);

  //for local storage [fetching todos]
  useEffect(()=>{
    console.log("Getting");
    const storedTodos = localStorage.getItem('todos');
    console.log(storedTodos);
    if(storedTodos){
      setTodos(JSON.parse(storedTodos));   
    }
    localStorage.setItem('todos',JSON.stringify(storedTodos));
  },[])

  //for local storage [saving todos]
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  //handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  }

  //addTodo
  const addTodo = () => {
    if(todoInput.trim() !== ''){
      setTodos([...todos,{id: Date.now(), title: todoInput, completed: false}]);
      setTodoInput('');
    }
  }

  //AddTodoOnEnter
  const EnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    if(event.key === 'Enter'){
      event.preventDefault();
      document.getElementById('addbutton')?.click();
    }
  }

  //toggleTodo (complete/inprogress)
  const toggleTodo = (id:number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }

  //deleteTodo
  const deleteTodo = (id:number) => {
    setTodos(todos.filter(todo=>todo.id !== id));
  }

  //resetTodos
  const resetTodos = () => {
    setTodos([]);
  }

  return (
    <div>
      <main className="min-h-[96vh] min-w-screen bg-red-400 bg-[url('../public/background.svg')] flex flex-col items-center justify-center">
  
        <div className="todo-container rounded-2xl min-w-[85vw] min-h-[85vh] flex flex-col justify-start bg-white text-red-400 shadow-2xl">

          {/* Header (Logo and Reset Button) */}
          <header className="flex flex-row justify-between my-5 w-full text-3xl font-bold">
            
            <div className="flex flex-col">
              <div className="">
                TO
              </div>
              <div className="">
                DO
              </div>
            </div>
            
            <Image onClick={resetTodos} className="cursor-pointer mr-16" alt="reset" src={'reset.svg'} width={35} height={35}/>
           
          </header>

          {/* Todo Input */}
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
              <Image alt="tdl" src={'add.svg'} width={35} height={35}/>
            </button>
  
          </div>

          {/* List of Todos */}
          <div className="todo-list flex flex-row flex-wrap h-full max-w-full justify-start items-start">
            {todos.map(todo => 
              <div key={todo.id} className="flex flex-row my-2 items-center max-w-[60] min-h-10 rounded-xl shadow-xl bg-red-400">
                <div className="justify-items-start min-w-[45vh]">
                  <input
                    type="checkbox"
                    className=""
                    checked={!!todo.completed} //explicit boolean casting
                    onChange={()=> toggleTodo(todo.id)}
                  />
    
                  <span className="font-medium" style={{textDecoration : todo.completed ? "line-through": "none", color: todo.completed ? "gray":"black"}}>
                    {todo.title}
                  </span>
                </div>
  
                <button className="justify-items-end mx-20" onClick={()=> deleteTodo(todo.id)}>
                  <Image alt="todo delete" src={'delete.svg'} width={15} height={15}/>
                </button>
              </div>
            )} 
          </div>
  
        </div>
      </main>
      
      {/* Footer */}
      <footer className="flex flex-row py-4 justify-between items-center h-[4vh] relative mb-0  w-full bg-white text-black font-medium">
              
        <Link className="mx-2" href={"https://github.com/some-earth11"} target="_blank">
          <Image alt="tdl" src={'github.svg'} width={25} height={20}/>
        </Link>
      
        <div className="flex flex-row justify-around mx-2">
          <Image alt="ts" className="mx-1" src={'typescript.svg'} width={20} height={20}/>
          <Image alt="tailwind" className="mx-1" src={'tailwind.svg'} width={20} height={20}/>
          <Image alt="nextjs" className="mx-1" src={'next.svg'} width={50} height={50}/>
        </div>
  
      </footer>

    </div>
  );
}

//Next Version [Open for Contributions]
/*
0. Custom Checkboxes
1. Share To-Dos
2. Update To-Dos
3. Lazy Loading for To-Dos
4. Breakpoints for variable sizing
5. Fix CSS
*/