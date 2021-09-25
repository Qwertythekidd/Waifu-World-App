import React from 'react';
import Product from './components/Product';
import data from './data';
function App() {
  return (
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
        <div>
        <div className="row center">
          {data.product.map(product =>(
            <Product key={product.id} product={product}></Product>           
            ))
          } 
        </div>
        </div>
    </main>
    <footer className="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
