import renderer from 'react-test-renderer';
import expect from 'expect';
import TodoInput from '../../organisms/TodoInput';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <Provider store={store}>
        <TodoInput />
        </Provider>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})