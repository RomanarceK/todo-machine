import React from "react";
import { TodoContext } from "../../TodoContext";
import '../../css/index.css';

function TodoForm() {
    const [newTodo, setNewTodo] = React.useState('');
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodo(e.target.value);
    }

    const removePlaceholder = (e) => {
        e.target.placeholder = '';
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    }

    return(
        <form className="todoForm" onSubmit={onSubmit}>
            <label>Escriba su nueva Tarea!</label>
            <textarea placeholder="Nueva tarea..." value={newTodo} onChange={onChange} onClick={removePlaceholder}/>

            <div className="todoForm-buttonContainer">
                <button className="button-30 todoForm-buttonAdd">Añadir</button>
                <button type="button" className="button-30 todoForm-buttonCancel" onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    );
}

export { TodoForm }