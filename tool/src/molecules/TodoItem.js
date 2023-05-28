import style from "./TodoItem.module.scss";

import Checkbox from "../atoms/Checkbox"
import CloseButton from "./CloseButton";

const TodoItem = () => {
    return (
        <li className={style.container}>
                <Checkbox />
                <span>{"Some very important task"}</span>
                <CloseButton />
        </li>
    )
}

export default TodoItem;