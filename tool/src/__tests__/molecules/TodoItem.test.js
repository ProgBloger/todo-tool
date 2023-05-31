import renderer from 'react-test-renderer';
import expect from 'expect';
import TodoItem from '../../molecules/TodoItem';
import React from 'react';
import store, { setupStore } from '../../store';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../utils/test-utils';
import { fireEvent } from '@testing-library/react';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <Provider store={store}>
            <TodoItem />
        </Provider>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})

it('if checkbox clicked completed state changed', () => {
    // Arrange
    const initialCompleted = true;
    const initialItem = { 
        id: 0, 
        text: 'Pet a cat', 
        completed: initialCompleted
    };

    const initialState = {
        todoList: {
            items: [initialItem],
            itemsToShow:[initialItem],
            itemsTotal: 1,
            itemsTotalActive: 0,
            filter: null,
        }
    };
    
    const store = setupStore(initialState);
    const {container} = renderWithProviders(
            <TodoItem
            key={initialItem.id}
            id={initialItem.id}
            text={initialItem.text}
            completed={initialItem.completed} />, {
                preloadedState:initialState,
                store: store
            });
        

    // Act
    fireEvent.click(container.querySelector(`input[id="${initialItem.id}"]`));

    // Assert
    let state = store.getState();
    let item = state.todoList.items[0]
    expect(item.completed).toBe(!initialCompleted);
})

it('if close button clicked item is removed', () => {
    // Arrange
    const initialItem = { 
        id: 0, 
        text: 'Pet a cat', 
        completed: true
    };

    const initialState = {
        todoList: {
            items: [initialItem],
            itemsToShow:[initialItem],
            itemsTotal: 1,
            itemsTotalActive: 0,
            filter: null,
        }
    };
    
    const store = setupStore(initialState);

    const {container} = renderWithProviders(
            <TodoItem
            key={initialItem.id}
            id={initialItem.id}
            text={initialItem.text}
            completed={initialItem.completed} />, {
                preloadedState:initialState,
                store: store
            });

    // Act
    fireEvent.click(container.querySelector(`button`));

    // Assert
    let state = store.getState();
    expect(state.todoList.items).toHaveLength(0);
    expect(state.todoList.itemsTotal).toBe(0);
})