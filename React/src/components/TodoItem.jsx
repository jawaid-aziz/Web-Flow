import React from "react";

const TodoItem =() => {
    return (
        <li className="todo-item">
            <span>
            <input type="checkbox" />
            <span>Eat</span>
            </span>
        </li>
    );
}

export default TodoItem;