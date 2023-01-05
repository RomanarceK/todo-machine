import React from "react";
import { TodoCounter } from "./TodoCounter";
import {CreateTodoButton} from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { TodoContext } from "../TodoContext";

function Header() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <div className="header-container">
            <TodoCounter />
            <img className="header-img" src={"./portrait.png"} alt="girl-img" />
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal}/>
        </div>
    );
}

export { Header };