import React, {render} from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./partials/Navigation";
import Login from "./auth/Login";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./partials/PrivateRoute";
import Register from "./auth/Register";

function Master() {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Navigation />
                <Switch>
                    <PrivateRoute  exact path={'/'} component={Dashboard} />
                    <Route  exact path={'/register'} component={Register} />
                    <Route component={Login}/>
                </Switch>
            </HashRouter>
            <NotificationContainer/>
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<Master />, document.getElementById('app'));
}
