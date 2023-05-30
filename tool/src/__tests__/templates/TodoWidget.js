import renderer from 'react-test-renderer';
import expect from 'expect';
import TodoWidget from '../../templates/TodoWidget';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <Provider store={store}>
        <TodoWidget />
        </Provider>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})