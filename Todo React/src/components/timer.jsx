import React, {useEffect, useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect( () => {
        const timer = setInterval(() => {
            setTime(time +1)
        }, 1000);

        return function () {
            clearInterval(timer);
        };

    },[time]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current time is {time}</p>
        </div>
    );
};

export default Timer;