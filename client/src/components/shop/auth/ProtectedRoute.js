import React,{useContext} from 'react'
import { Route,Redirect } from 'react-router-dom'
import {isAuthenticate} from "./fetchApi";

const ProtectedRoute = ({ component:Component, ...rest }) => (
    <Route
      {...rest}
      render={props=> 
      	isAuthenticate() ? (
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



export default ProtectedRoute;