import renderer from 'react-test-renderer';
import Card from '../../atoms/Card';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

it('renders', () => {
    // Arrange
    // Act
    const tree = renderer.create(
        <Card>inner text</Card>
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});


test('renders children', () => {
    // Arrange
    const innerText = "child text";

    // Act
    render(
        <Card>
            {innerText}
        </Card>
        );

    // Assert
    const linkElement = screen.getByText(new RegExp(innerText, "i"));
    expect(linkElement).toBeInTheDocument();
  });
