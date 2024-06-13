import React from "react";
import { useState } from "react";

const Counter = () => {
    const value = useState(0);

    return (
        <div>
            <p>Count Component</p>
        </div>
    );

};

export default Counter;