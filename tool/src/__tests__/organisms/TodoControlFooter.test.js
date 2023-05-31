import renderer, { act } from 'react-test-renderer';
import expect from 'expect';
import TodoControlFooter from '../../organisms/TodoControlFooter';
import React from 'react';
import store, { setupStore } from '../../store';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import { todoActions } from '../../store/todo-list-slice';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <Provider store={store}>
        <TodoControlFooter />
        </Provider>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})



it('if task change to complete items left decremented', () => {
    // Arrange
    const initialItem = { 
        id: 0, 
        text: 'Pet a cat', 
        completed: false
    };

    const {addItem, changeItemState} = todoActions;
    
    const store = setupStore();
    store.dispatch(addItem(initialItem));
    renderWithProviders(
            <TodoControlFooter />, {
                store: store,
            });
    
    const itemId = store.getState().todoList.items[0].id;
    
    // Act
    act(() => {
        store.dispatch(changeItemState({
            id: itemId, 
            completed: !initialItem.completed,}));
    });

    // Assert
    const expectedLabel = screen.getByText(/0 items left/i);

    let state = store.getState();
    expect(state.todoList.itemsTotalActive).toBe(0);

    expect(expectedLabel)
        .toBeDefined();
})

// if task change to active items left incremented
// if task added items left incremented

// if All clicked all tasks are in show array
// if All clicked All button has activeFilter class

// if Active clicked only active tasks are in show array
// if Active clicked All button has activeFilter class

// if Completed clicked all tasks are in show array
// if Completed clicked All button has activeFilter class

// if Clear Completed clicked no Complete items present