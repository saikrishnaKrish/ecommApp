import React, { useState } from 'react'
import CounterContext from './CounterContext';

const CounterProvider = ({children}) => {
    const  [count,setCount]=useState(100);

    const handleIncrement = ()=>{
        setCount((c)=>c+2)
    }
    const handleDecrement = ()=>{
        setCount((c)=>c-2)
    }
    

  return (
    <CounterContext.Provider value={{count,handleIncrement,handleDecrement}} >
            {children}
    </CounterContext.Provider>
    
  )
}

export default CounterProvider


