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

            // update the show list based on active filter
        },
        removeItem(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            
            // updating totals on item being removed
            state.itemsTotal--;
            if(!existingItem.completed) {
                state.itemsTotalActive--;
            }

            state.items = state.items.filter(item => item.id !== id);

            // update the show list based on active filter
        },
        changeItemState(state, action) {
            // find item from the state list
            const newItemState = action.payload;
            const foundItem = state.items.find((item) => item.id === newItemState.id);
            
            // set item's state from the payload
            foundItem.completed = newItemState.completed;
            
            if(foundItem.completed) {
                state.itemsTotalActive--;
            } else {
                state.itemsTotalActive++;
            }
            
            // update the show list based on active filter
        },
        fiterItems(state, action) {},
        clearCompleted(state, action){},
    },
});

export const todoActions = todoListSlice.actions;
export default todoListSlice;

