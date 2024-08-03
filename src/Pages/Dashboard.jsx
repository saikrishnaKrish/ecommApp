import React, { useContext } from 'react'
import CounterContext from '../components/ContextExample/CounterContext';

const Dashboard = () => {

  const data=  useContext(CounterContext)
  console.log(data)
const {count,handleIncrement,handleDecrement} =data;


  return (
    <div>Dashboard
         <h1>Count {count}</h1>

         <button onClick={handleIncrement}>Inc (+)</button>
         <button onClick={handleDecrement}>Dec (-)</button>


    </div>
     


  )
}

export default Dashboard