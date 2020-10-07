import React, { Fragment } from 'react';
import { Home, WishList, ProtectedRoute, AdminProtectedRoute, CartProtectedRoute, PageNotFound, ProductDetails, ProductByCategory, CheckoutPage } from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders } from './shop/dashboardUser';

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
                <Route exact path="/products/category/:catId" component={ProductByCategory} />
                <CartProtectedRoute exact={true} path="/checkout" component={CheckoutPage} />
                {/* Shop & Public Routes */}


                {/* Admin Routes */}
                <AdminProtectedRoute exact={true} path="/admin/dashboard" component={DashboardAdmin} />
                <AdminProtectedRoute exact={true} path="/admin/dashboard/categories" component={Categories} />
                <AdminProtectedRoute exact={true} path="/admin/dashboard/products" component={Products} />
                <AdminProtectedRoute exact={true} path="/admin/dashboard/orders" component={Orders} />
                {/* Admin Routes */}
                

                {/* User Dashboard */}
                <ProtectedRoute exact={true} path="/user/profile" component={UserProfile} />
                <ProtectedRoute exact={true} path="/user/orders" component={UserOrders} />
                {/* User Dashboard */}


                {/* 404 Page */}
                <Route component={PageNotFound} />

           </Switch>
        </Router>
    )
}

export default Routes;