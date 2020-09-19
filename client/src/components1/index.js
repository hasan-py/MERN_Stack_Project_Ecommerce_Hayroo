import React,{Fragment} from 'react';
import {Home,WishList,ProtectedRoute,AdminProtectedRoute,PageNotFound} from "./shop";
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
        <AdminProtectedRoute exact={true} path="/admin/dashboard" component={DashboardAdmin} />
        <ProtectedRoute exact={true} path="/user/dashboard" component={DashboardUser} />
        {/* Admin Routes */}

        {/* 404 Page */}
        <Route component={PageNotFound} />

       </Switch>
    </Router>
  )
}

export default Main;