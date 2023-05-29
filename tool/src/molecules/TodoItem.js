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

    return (
        <li className={style.container}>
                <Checkbox 
                    id={id}
                    valueCallback={checkboxHandler}
                    setActive={completed}
                    enabled={true}
                     />
                <span>{text}</span>
                <CloseButton />
        </li>
    )
}

export default TodoItem;