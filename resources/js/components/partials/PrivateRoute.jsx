import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

export default class PrivateRoute extends Component {

    componentDidCatch = (error, info) => {
        //
    };//...... end of componentDidCatch() .....//

    render() {
        const {component: Component, ...rest} = this.props;
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        return (
                <Route {...rest}
                    render={props =>
                        isAuthenticated ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to={{ pathname: "/login", state: { from: props.location }}}/>
                        )
                    }
                />
        );
    }//..... end of render() .....//
}//..... end of PrivateRoute.
