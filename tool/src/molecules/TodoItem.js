import style from "./TodoItem.module.scss";

import Checkbox from "../atoms/Checkbox"
import CloseButton from "./CloseButton";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-list-slice";

const TodoItem = ({id, text, completed}) => {
    const dispatchAction = useDispatch();
    
    const checkboxHandler = (value) => {
        dispatchAction(todoActions.changeItemState({
            id:id,
            completed:value}));
    }

    const deleteButtonHandler = () => {
        dispatchAction(todoActions.removeItem({id:id}));
    }

    return (
        <li className={style.container}>
                <Checkbox 
                    id={id}
                    valueCallback={checkboxHandler}
                    setActive={completed}
                    enabled={true}
                     />
                <span>{text}</span>
                <CloseButton clickCallback={deleteButtonHandler} />
        </li>
    )
}

export default TodoItem;