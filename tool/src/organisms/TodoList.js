import React from "react";
import TodoItem from "../molecules/TodoItem";
import styles from "./TodoList.module.scss";

import { useSelector } from "react-redux";

const TodoList = () => {
    const todoItems = useSelector((state) => state.todoList.itemsToShow);

    const content = () => {
        return todoItems.map(item => 
        <TodoItem 
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            />)
    }
    
    return (
        <ul className={styles.list}>
            {content()}
        </ul>
    )
}

export default TodoList;