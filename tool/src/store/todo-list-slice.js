import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    itemsToShow:[],
    itemsTotal: 0,
    itemsTotalActive: 0,
    filterState: 'FILTER_ALL',
};

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addItem(state, action) {
            state.itemsTotal = state.itemsTotal + 1;
            state.itemsTotalActive = state.itemsTotalActive + 1;
            console.log(action);
            const newItem = {
                id: state.itemsTotal,
                text: action.payload.text,
                completed: false,
            }

            state.items.push(newItem);
        },
        removeItem(state, action) {},
        changeItemState(state, action) {
            // find item from the state list
            let newItemState = action.payload;
            var foundItem = state.items.find((item) => item.id === newItemState.id);
            
            // set item's state from the payload
            foundItem.completed = newItemState.completed;
            
            // call the filter function
        },
        fiterItems(state, action) {},
        clearCompleted(state, action){},
    },
});

export const todoActions = todoListSlice.actions;
export default todoListSlice;

