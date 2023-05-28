import style from "./TodoItem.module.scss";

import Checkbox from "../atoms/Checkbox"

const TodoItem = () => {
    return (
        <li className={style.container}><Checkbox /><span>{"Some very important task"}</span><button>X</button></li>
    )
}

export default TodoItem;