import React from "react";
import TodoControlFooter from "../organisms/TodoControlFooter";
import TodoList from "../organisms/TodoList";

const TodoWidget = () => {
    return (
        <React.Fragment>
            <TodoList />
            <TodoControlFooter />
        </React.Fragment>
    );
}

export default TodoWidget;