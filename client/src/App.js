import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navber } from "./components/partials";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Routing() { 
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product-detail" component={ProductDetail} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact={true} path="/dashboard" component={Dashboard} />
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
