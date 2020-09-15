import React from 'react'
import { Redirect } from 'react-router-dom'
import {isAuthenticate} from "./index";

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
       
        return isAuthenticate() ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/signin' }} />
        );
    }
}

export default ProtectedRoute;