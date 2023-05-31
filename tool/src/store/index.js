import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoListSlice from "./todo-list-slice";

var persistedState = JSON.parse(localStorage.getItem("state"));

const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
    },
    preloadedState: persistedState === null ? {} : persistedState
});

store.subscribe(() => {
    var state = store.getState();

    var jsonState = JSON.stringify(state);
    localStorage.setItem("state", jsonState);
});

export default store;

export const setupStore = preloadedState => {
    return configureStore({
        reducer: {
            todoList: todoListSlice.reducer,
        },
        preloadedState: preloadedState
    })
}