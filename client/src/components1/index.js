import React,{Fragment} from 'react';
import {Home,WishList} from "./shop";
import {DashboardAdmin,DashboardUser} from "./admin";

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

        {/* Shop Routes */}
	    	<Route exact path="/" component={Home} />
	    	<Route exact path="/wish-list" component={WishList} />
        {/* Shop Routes */}

        {/* Admin Routes */}
        <Route exact path="/admin/dashboard" component={DashboardAdmin} />
        <Route exact path="/user/dashboard" component={DashboardUser} />
        {/* Admin Routes */}

	    </Switch>
    </Router>
  )
}

export default Main;