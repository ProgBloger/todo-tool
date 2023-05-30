import renderer from 'react-test-renderer';
import Checkbox from '../../atoms/Checkbox';
import expect from 'expect';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

it('renders', () => {
  // Arrange
  // Act
  const tree = renderer.create(
    <Checkbox />
  ).toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
})