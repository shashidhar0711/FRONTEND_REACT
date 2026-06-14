import React from 'react'
// import { useState } from 'react';
import { decrement, increment, reset } from '../reduxConfig/counterSlice';
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';


function Counter() {
    // const[count, setCount] = useState(0);
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    function handleIncrement() {
        // setCount(count + 1)
        dispatch(increment())
    }


    function handleDecrement() {
        // if(count > 0) {
        //     setCount(count - 1)
        // }
        dispatch(decrement())
    }

    function handleReset() {
        dispatch(reset())
        // setCount(0)
    }


  return (
    <>
        <button onClick={handleIncrement}>increment</button>
        <h3>{count}</h3>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Counter