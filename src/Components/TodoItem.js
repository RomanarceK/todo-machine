import React from "react";

function TodoItem(props) {
    return (
        <li className="card">
            <span className="check" onClick={props.onComplete}>{`${props.completed ? '✔️' : '⚪'}`}</span>
            <p className={`content ${props.completed ? 'completed' : ''}`}>{props.text}</p>
            <span className="delete" onClick={props.onDelete}>❌</span>
        </li>
    );
}

export { TodoItem }