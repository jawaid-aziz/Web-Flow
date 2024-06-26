import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
    let [count, setCount] = useState(10);
    useEffect(() => {
        count = count + 5;
    },[count]);

    return (
        <div>
            <p>Count Component - {count}</p>
            <h3>The value is {count%2==0?"Even":"Odd"}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
    );

};

export default Counter;