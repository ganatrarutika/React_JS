import React from "react";
import React, { useState } from "react";
import './counterApp.css';

function counter(){
    let [count,setcount] = useState(0);
    let increment = () => {
        setcount(count+1);
        console.log(count);
    }
    let decrement = () => {
        setcount(count-1);
        console.log(count)
    }
    return(
        <div>
            <h1>{count}</h1>
            <div className="button-container">
                <button onClick={increment} className="btn increment-btn">Increment</button>
                <button onClick={decrement} className="btn decrement-btn">Decrement</button>
            </div>
        </div>
    )
}
export default counter;