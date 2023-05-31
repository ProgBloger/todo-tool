import renderer from 'react-test-renderer';
import Checkbox from '../../atoms/Checkbox';
import expect from 'expect';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

it('renders', () => {
  // Arrange
  // Act
  const tree = renderer.create(
    <Checkbox />
  ).toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
})


test('if setActive set to false and checkbox is clicked callback returns opposite to setActive', () => {
  // Arrange
  const setActiveInput = false;
  const callback = jest.fn();

  // Act
  const {container} = render(
      <Checkbox 
        id={0}
        setActive={setActiveInput}
        enableStyles={true}
        valueCallback={callback}
         />
      );

  fireEvent.click(container.querySelector('div'));

  // Assert
  expect(callback).toHaveBeenCalledWith(!setActiveInput);
});



test('if enableStyles and setActive className is set to active', () => {
  // Arrange
  const enableStylesInput = true;
  const setActiveInput = true;
  const callback = jest.fn();
  const expectedClassValue = "active";
  const {container} = render(
      <Checkbox 
        id={0}
        setActive={setActiveInput}
        enableStyles={enableStylesInput}
        valueCallback={callback}
         />
      );


  // Act
  var checkBox = container.querySelector('div');

  // Assert
  expect(checkBox).toHaveClass(expectedClassValue);
});


test('if !enableStyles and setActive className is set to inactive', () => {
  // Arrange
  const enableStylesInput = false;
  const setActiveInput = true;
  const callback = jest.fn();
  const expectedClassValue = "inactive";

  // Act
  const {container} = render(
      <Checkbox 
        id={0}
        setActive={setActiveInput}
        enableStyles={enableStylesInput}
        valueCallback={callback}
         />
      );

  var checkBox = container.querySelector('div');

  // Assert
  expect(checkBox).toHaveClass(expectedClassValue);
});

test('if enableStyles and !setActive className is set to inactive', () => {
  // Arrange
  const enableStylesInput = true;
  const setActiveInput = false;
  const callback = jest.fn();
  const expectedClassValue = "inactive";

  // Act
  const {container} = render(
      <Checkbox 
        id={0}
        setActive={setActiveInput}
        enableStyles={enableStylesInput}
        valueCallback={callback}
         />
      );

  var checkBox = container.querySelector('div');

  // Assert
  expect(checkBox).toHaveClass(expectedClassValue);
});