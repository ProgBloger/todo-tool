import Checkbox from "../atoms/Checkbox"

const TodoItem = () => {
    return (
        <li><Checkbox /><span>{"Some very important task"}</span><button>X</button></li>
    )
}

export default TodoItem;