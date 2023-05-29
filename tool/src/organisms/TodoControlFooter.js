import { useDispatch, useSelector } from "react-redux";
import style from "./TodoControlFooter.module.scss";
import React from "react";
import { todoActions } from "../store/todo-list-slice";

const TodoControlFooter = () => {
    const FILTER_ALL = null;
    const FILTER_ACTIVE = false;
    const FILTER_COMPLETED = true;

    const totalActive = useSelector((state) => state.todoList.itemsTotalActive);
    const dispatchAction = useDispatch();

    const setFilterHandler = (filterParam) => {
        dispatchAction(todoActions.fiterItems(filterParam));
    }

    return (
        <React.Fragment>
            <div className={style.container}>
                <span className={style.left}>
                    <label>{totalActive} items left</label>
                </span>
                <span className={style.center}>
                    <button 
                        onClick={() => setFilterHandler(FILTER_ALL)}
                        >All</button>
                    <button
                        onClick={() => setFilterHandler(FILTER_ACTIVE)}
                        >Active</button>
                    <button
                        onClick={() => setFilterHandler(FILTER_COMPLETED)}
                        >Completed</button>
                </span>
                <span className={style.right}>
                    <button>Clear Completed</button>
                </span>
            </div>
        </React.Fragment>
    )
}

export default TodoControlFooter;