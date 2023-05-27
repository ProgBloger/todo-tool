import React from "react";

const TodoControlFooter = () => {

    return (
        <React.Fragment>
            <div>
                <label>{5} items left</label>
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>
                <button>Clear Completed</button>
            </div>
        </React.Fragment>
    )
}

export default TodoControlFooter;