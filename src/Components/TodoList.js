import React from "react";

function TodoList(props) {
    return (
        <section className="scrollbar">
            <ul className="style-none">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }