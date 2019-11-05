import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import AddForm from '../components/AddForm';
import List from '../components/List';
import Card from '../components/Card';

const App = () => {
  const todo = useSelector(state => state.todo);
  const inProgress = useSelector(state => state.inProgress);
  const done = useSelector(state => state.done);

  return (
    <div className='App'>
      <header className='Header'>
        <AddForm />
        <p>Developed by <a href="https://github.com/iairpolo">Iair Poloniecki</a></p>
      </header>
      <main className='mainKanban'>
        <List title='To-Do'>
          {todo.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </List>
        <List title='In Progress'>
          {inProgress.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </List>
        <List title='Done'>
          {done.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </List>
      </main>
    </div>
  );
};

export default App;
