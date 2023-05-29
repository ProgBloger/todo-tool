import React from "react";
import Checkbox from "../atoms/Checkbox";
import styles from "./TodoInput.module.scss";
import { todoActions } from "../store/todo-list-slice";
import { useDispatch } from "react-redux";

const TodoInput = () => {
    const dispatchAction = useDispatch();
    const ref = React.createRef();
    const keyDownHandler = (e) => {
        if(e.keyCode == 13) {
            addItemHandler()
        }
    };

    const addItemHandler = () => {
        dispatchAction(
            todoActions.addItem({
                text:ref.current.value
            })
        );
    
        ref.current.value = '';
    };

    return (
        <React.Fragment>
            <div className={styles.container}>
                <Checkbox 
                    id={-1} 
                    setActive={false} 
                    enableStyles={false}
                    valueCallback={addItemHandler}
                    />
                <input 
                    className={styles.note} 
                    type="text" 
                    placeholder="If you want God to laugh tell him your plans"
                    ref={ref}
                    onKeyDown={keyDownHandler}
                    />
            </div>
        </React.Fragment>
    )
}

export default TodoInput;