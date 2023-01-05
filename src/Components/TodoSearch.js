import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <input className="search" type="search" placeholder="Buscar tarea" value={searchValue} onChange={onSearchValueChange}/>
    );
}

export { TodoSearch };