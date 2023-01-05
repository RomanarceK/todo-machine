import React from 'react';
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from '../TodoContext';
import { Loader } from './Loader';
import { Error } from './Error';

function Body() {
    const {
        completeTodo,
        deleteTodo,
        searchedTodos,
        error,
        loading
    } = React.useContext(TodoContext);
    return (
        <div className="body-container">
            <TodoSearch />
            {error && <Error error={error}/>}
            {loading && <Loader/>}
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)} 
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        </div>
    );
}

export {Body};
