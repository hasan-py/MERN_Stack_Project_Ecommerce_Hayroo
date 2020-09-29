import React, { Fragment } from 'react';
import { Home, WishList, ProtectedRoute, AdminProtectedRoute, PageNotFound, ProductDetails } from "./shop";
import { DashboardAdmin, DashboardUser, Categories, Products } from "./admin";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

/* Routing All page will be here */
const Routes = (props) => {
    return (
        <Router>
            <Switch>

                {/* Shop & Public Routes */}
                <Route exact path="/" component={Home} />
                <Route exact path="/wish-list" component={WishList} />
                <Route exact path="/products/:id" component={ProductDetails} />
                {/* Shop & Public Routes */}


                {/* Admin Routes */}
                <AdminProtectedRoute exact={true} path="/admin/dashboard" component={DashboardAdmin} />
                <AdminProtectedRoute exact={true} path="/admin/dashboard/categories" component={Categories} />
                <AdminProtectedRoute exact={true} path="/admin/dashboard/products" component={Products} />
                {/* Admin Routes */}
                

                {/* User Dashboard */}
                <ProtectedRoute exact={true} path="/user/dashboard" component={DashboardUser} />
                {/* User Dashboard */}


                {/* 404 Page */}
                <Route component={PageNotFound} />

           </Switch>
        </Router>
    )
}

export default Routes;