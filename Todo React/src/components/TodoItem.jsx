import React from "react";

const TodoItem =(props) => {
    return (
        <li className="todo-item">
            <span>
            {props.complete ? <></> : <input type="checkbox" /> }
            <span className="todo-item-text">{props.todo}</span>
            </span>
        </li>
    );
}

export default TodoItem;