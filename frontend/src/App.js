import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
            <a className="brand" href="index.html">
            Waifu World
            </a>
        </div>
      <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
      </div>
      </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>            
          </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
