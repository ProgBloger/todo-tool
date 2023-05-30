import renderer from 'react-test-renderer';
import CloseButton from '../../molecules/CloseButton';
import expect from 'expect';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <CloseButton />
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})