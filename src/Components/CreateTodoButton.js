import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const {setOpenModal} = React.useContext(TodoContext);
    const onClickButton = () => {
        {setOpenModal(prevState => !prevState)}
    }
    
    return (
        <button className="button-30" onClick={onClickButton}>Crear Tarea</button>
    );
}

export { CreateTodoButton };