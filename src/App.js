import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { menuItems } from './assets/menuItems';

function App() {
  return (
    <>
      <HomePage menuItems={menuItems} />
    </>
  );
}

export default App;
