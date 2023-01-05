import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <h2 className="counter">ToDo List</h2>
            <p className="content">{completedTodos} de {totalTodos} tareas completadas</p>
        </React.Fragment>
    );
}

export { TodoCounter };