import React from 'react';
import Header from '../templates/Header';
import appStyle from './App.module.scss';
import Todo from '../templates/Todo';

function App() {
  return (
    <React.Fragment>
      <Header />
          <main>
            <Todo />
          </main>
    </React.Fragment>
  );
}

export default App;