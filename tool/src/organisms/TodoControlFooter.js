import style from "./TodoControlFooter.module.scss";
import React from "react";

const TodoControlFooter = () => {

    return (
        <React.Fragment>
            <div className={style.container}>
                <span className={style.left}>
                    <label>{5} items left</label>
                </span>
                <span className={style.center}>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </span>
                <span className={style.right}>
                    <button>Clear Completed</button>
                </span>
            </div>
        </React.Fragment>
    )
}

export default TodoControlFooter;