import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div>
      <div className="counter">
        <button className="btn decrement" onClick={Decrement}>
          Decrement
        </button>
        <h1 className="count">{count}</h1>
        <button className="btn increment" onClick={Increment}>
          Increment
        </button>
        <button className="btn reset" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
