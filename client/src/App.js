import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navber } from "./components/partials";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Routing() { 
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/product/details">
          <ProductDetail />
        </Route>
        <Route exact path="/signin/">
          <Signin />
        </Route>
        <Route exact path="/signup/">
          <Signup />
        </Route>
        <Route exact path="/admin/dashboard">
          <Dashboard />
        </Route>
      </Switch>
  );
}

function App(){
	return (
		<div className="App">
			<Router>
				<Routing/>
			</Router>
		</div>
	)
}

export default App;
