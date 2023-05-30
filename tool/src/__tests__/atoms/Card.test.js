import renderer from 'react-test-renderer';
import Card from '../../atoms/Card';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

it('renders', () => {
    // Arrange
    // Act
    const tree = renderer.create(
        <Card>inner text</Card>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});