import { useDispatch, useSelector } from "react-redux";
import style from "./TodoControlFooter.module.scss";
import React from "react";
import { todoActions } from "../store/todo-list-slice";

const TodoControlFooter = () => {
    const FILTER_ALL = null;
    const FILTER_ACTIVE = false;
    const FILTER_COMPLETED = true;

    const footerState = useSelector((state) => {
        return {
        totalActive: state.todoList.itemsTotalActive,
        activeFilter: state.todoList.filter,
    }});

    const dispatchAction = useDispatch();

    const setFilterHandler = (filterParam) => {
        dispatchAction(todoActions.fiterItems(filterParam));
    }

    console.log(footerState.activeFilter === FILTER_ALL);

    return (
        <React.Fragment>
            <div className={style.container}>
                <span className={style.left}>
                    <label>{footerState.totalActive} items left</label>
                </span>
                <span className={style.center}>
                    <button 
                        className={footerState.activeFilter === FILTER_ALL 
                                    ? style.activeFilter
                                    : undefined}
                        onClick={() => setFilterHandler(FILTER_ALL)}
                        >All</button>
                    <button
                        className={footerState.activeFilter == FILTER_ACTIVE 
                            ? style.activeFilter
                            : undefined}
                        onClick={() => setFilterHandler(FILTER_ACTIVE)}
                        >Active</button>
                    <button
                        className={footerState.activeFilter === FILTER_COMPLETED 
                            ? style.activeFilter
                            : undefined}
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