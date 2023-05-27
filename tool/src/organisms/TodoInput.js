import React from "react";
import Checkbox from "../atoms/Checkbox";

const TodoInput = () => {
    return (
        <React.Fragment>
            <Checkbox />
            <span>Currently typing</span>
            <input type="text" />
        </React.Fragment>
    )
}

export default TodoInput;