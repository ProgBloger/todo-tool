import renderer from 'react-test-renderer';
import expect from 'expect';
import TodoList from '../../organisms/TodoList';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <Provider store={store}>
        <TodoList />
        </Provider>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})