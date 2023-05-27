import React from 'react';
import Header from '../templates/Header';
import appStyle from './App.module.scss';
import TodoWidget from '../templates/TodoWidget';
import TodoInput from '../organisms/TodoInput';

function App() {
  return (
    <React.Fragment>
      <Header />
          <main>
            <div className={appStyle['main-container']}>
              <label>TODO</label>
              <TodoInput />
              <TodoWidget />
            </div>
          </main>
    </React.Fragment>
  );
}

export default App;