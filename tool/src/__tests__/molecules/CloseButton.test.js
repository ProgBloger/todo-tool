import renderer from 'react-test-renderer';
import CloseButton from '../../molecules/CloseButton';
import expect from 'expect';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <CloseButton />
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})


test('if button is clicked callback is called', () => {
    // Arrange
    const callback = jest.fn();
  
    // Act
    const {container} = render(
        <CloseButton 
          clickCallback={callback}
           />
        );
  
    fireEvent.click(container.querySelector('button'));
  
    // Assert
    expect(callback).toHaveBeenCalled();
  });