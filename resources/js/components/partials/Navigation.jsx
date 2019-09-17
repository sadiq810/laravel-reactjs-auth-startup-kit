import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {NotificationManager} from "react-notifications";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }//..... end of constructor() .....//

    handleLogout = () => {
        this.revokeAccessToken();
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userData');
        localStorage.removeItem('loggedInTime');
        this.props.history.push('/login');
    };

    componentDidUpdate = () => {
        this.updateLocalDetails();
    };//..... end of componentDidUpdate() .....//

    UNSAFE_componentWillMount = () => {
        this.updateLocalDetails();
    };//..... end of UNSAFE_componentWillMount() .....//

    updateLocalDetails = () => {
        let userData = localStorage.getItem('userData');
        if (userData) {
            userData = JSON.parse(userData);
            if (Object.keys(userData).length > 0) {
                let lastLoggedInTime = localStorage.getItem('loggedInTime');// time in milliseconds
                let now = (new Date()).getTime();
                let rememberMe = localStorage.getItem('isRemember');
                if (rememberMe !== 'true' && (now - lastLoggedInTime) > (10000*60*24)) // if user doesn't perform any activity in 24 minutes than log him/her out.
                    this.handleLogout();

                if (window.axios.defaults.headers.common['Authorization'] == undefined) {
                    window.axios.defaults.headers.common['Accept'] = 'application/json';
                    window.axios.defaults.headers.common['Authorization'] = 'Bearer '+ userData.access_token;
                }//..... end if() .....//

                localStorage.setItem('loggedInTime', (new Date()).getTime());

                if (this.state.name == '')
                    this.setState({name: userData.name || 'Anonymous'})
            } else {
                this.handleLogout();
            }
        }//..... end if() .....//
    };//..... end of updateLocalDetails() ....//

    revokeAccessToken = () => {
        show_loader();
        axios.get(BaseUrl + '/api/user/logout', {}).then((response) => {
            show_loader(true);
            NotificationManager.success(`Logout successfully.`, 'Success');
        }).catch((err) => {
            show_loader(true);
            NotificationManager.error(`Internal server error occurred, Please try later.`, 'Error');
        });
    };//..... end of revokeAccessToken() .....//

    render() {
        let isAuthenticated = localStorage.getItem('isAuthenticated');

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#/">
                        Laravel
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Left Side Of Navbar */}
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {/* Right Side Of Navbar */}
                        <ul className="navbar-nav ml-auto">
                            {isAuthenticated && isAuthenticated === 'true' && (
                                <>
                                    <li className="nav-item dropdown">
                                        <a id="navbarDropdown" className="nav-link" href="#" role="button"
                                           aria-expanded="false">
                                            { this.state.name }
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"  onClick={this.handleLogout}>Logout</a>
                                    </li>
                                </>
                            )}

                            {!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#/register">Register</a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }//..... end of render() .....//
}//..... end of Navigation.

export default withRouter(Navigation);
