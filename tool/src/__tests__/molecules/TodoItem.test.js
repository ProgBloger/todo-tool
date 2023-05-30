import renderer from 'react-test-renderer';
import expect from 'expect';
import TodoItem from '../../molecules/TodoItem';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

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