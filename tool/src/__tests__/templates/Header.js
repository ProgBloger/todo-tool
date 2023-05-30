import renderer from 'react-test-renderer';
import expect from 'expect';
import TodoList from '../../organisms/TodoList';
import Header from '../../templates/Header';

it('renders', () => {
    // Arrange
    // Act
    var tree = renderer.create(
        <Header />
    ).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
})