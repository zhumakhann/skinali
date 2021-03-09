import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
function PrivateRoute({ component: Component, ...rest }) {
    console.log(rest);
    return (
        <Route
            {...rest}
            render={props => {
                return rest.auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/auth" />
            }}
        >
        </Route>
    )
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps)(PrivateRoute)