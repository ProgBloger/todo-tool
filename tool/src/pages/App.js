import React from 'react';
import Header from '../templates/Header';
import appStyle from './App.module.scss';
import TodoWidget from '../templates/TodoWidget';
import TodoInput from '../organisms/TodoInput';
import Card from '../atoms/Card';

function App() {
  return (
    <React.Fragment>
      <Header />
          <main>
            <div className={appStyle['main-container']}>
              <h1>TODO</h1>
              <Card>
                <TodoInput />
              </Card>
              <TodoWidget />
            </div>
          </main>
    </React.Fragment>
  );
}

export default App;