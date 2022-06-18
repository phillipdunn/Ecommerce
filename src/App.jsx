import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Basket from './components/Basket';
import { menuItems } from './assets/menuItems';
import Shop from './components/Shop/Shop';
import Authentication from './pages/Authentication/Authentication';

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" render={() => <HomePage menuItems={menuItems} />} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/auth" component={Authentication} />
      <Route path="/basket" component={Basket} />
    </>
  );
}

export default App;
