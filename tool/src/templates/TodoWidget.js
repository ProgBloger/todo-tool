import React from "react";
import TodoControlFooter from "../organisms/TodoControlFooter";
import TodoList from "../organisms/TodoList";
import Card from "../atoms/Card";

const TodoWidget = () => {
    return (
            <Card>
                <TodoList />
                <TodoControlFooter />
            </Card>
    );
}

export default TodoWidget;