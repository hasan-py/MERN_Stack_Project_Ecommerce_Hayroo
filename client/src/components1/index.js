import React,{Fragment} from 'react';
import Layout from "./layout";
import Home from "./home";
import WishList from "./wishlist";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


/* Routing All page will be here */
const Main = (props) => {
  return (
    <Router>
	    <Switch>
	    	<Route exact path="/" component={Home} />
	    	<Route exact path="/wish-list" component={WishList} />
	    </Switch>
    </Router>
  )
}

export default Main;