import React from "react";
import TodoItem from "../molecules/TodoItem";

const TodoList = () => {

    const content = () => {
        return [{id:1},{id:2},{id:3},{id:4},{id:5}].map(item => <TodoItem key={item.id}/>)
    }
    
    console.log(content());

    return (
        <ul>
            {content()}
        </ul>
    )
}

export default TodoList;