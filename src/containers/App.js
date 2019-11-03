import React from 'react';
import './App.css';
import AddForm from '../components/AddForm';
import List from '../components/List';
import Card from '../components/Card';

const App = () => {
  return (
    <>
      <AddForm />
      <List>
        <Card />
      </List>
    </>
  );
};

export default App;
