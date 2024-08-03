import React, { useCallback, useState } from 'react'
import Todos from "./Todos.jsx";

const IuseCallback = () => {


  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   }

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
       <h1>Count: {count}</h1> 
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default IuseCallback