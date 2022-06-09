import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AllProducts from './components/Products/AllProducts';
import ProductDetail from './components/Products/ProductDetail';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CreateProduct from './components/Products/CreateProduct';
import './index.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/products" />} />
        <Route path="/products" exact component={AllProducts} />
        <Route path="/products/create" exact component={CreateProduct} />
        <Route path="/products/:id" exact component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
