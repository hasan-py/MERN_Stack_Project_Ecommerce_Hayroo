import React,{useContext} from 'react'
import { Route,Redirect } from 'react-router-dom'
import {isAuthenticate} from "./fetchApi";

const CartProtectedRoute = ({ component:Component, ...rest })  => (
    <Route
      {...rest}
      render={(props)=> 
      	JSON.parse(localStorage.getItem('cart')).length !== 0 && isAuthenticate() ? (
         	<Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
)

export default CartProtectedRoute;