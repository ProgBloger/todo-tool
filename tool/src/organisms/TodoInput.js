import React from "react";
import Checkbox from "../atoms/Checkbox";
import styles from "./TodoInput.module.scss";

const TodoInput = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <Checkbox />
                <input className={styles.note} type="text" value={"currently typing"} />
            </div>
        </React.Fragment>
    )
}

export default TodoInput;