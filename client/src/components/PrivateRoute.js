import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRourte = ({component: Component, ...props}) => {
    return (
        <Route
            {...props}
            render = {() => 
                localStorage.getItem('token') ? (
                    <Component />
                ) : (
                    <Redirect to ='/' />
                )
            }
        />
    );
};

export default PrivateRoute;