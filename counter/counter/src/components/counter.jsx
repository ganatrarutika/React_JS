import React, { useState } from "react";
import "./counter.css"

function Counter(){
    let [count, setCount] = useState(0);
     
    const increment = () =>{
        setCount(count+1)
        console.log(count)
    }
    const decrement = () =>{
        setCount(count-1)
        console.log(count)
    }
    const reset = () =>{
        setCount(0)
        console.log(count)
    }
    return (
        <div className="counter">
        <div className="count">{count}</div>
        <div>
        <button className="decrement" onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button className="increment" onClick={increment}>+</button>
        </div>
    </div>  
  );
}
export default Counter;