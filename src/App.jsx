import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { menuItems } from './assets/menuItems';

function App() {
  return (
    <>
      <Route exact path="/" render={() => <HomePage menuItems={menuItems} />} />
    </>
  );
}

export default App;
