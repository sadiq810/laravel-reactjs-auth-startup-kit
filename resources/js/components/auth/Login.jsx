import React, {Component} from 'react';
import {NotificationManager} from "react-notifications";

class Login extends Component {
    constructor(props) {
        super(props);
        this.isLoggedIn();
        this.state = {
            password: '',
            email: '',
            isRemember: false,
            isEmailValid: false
        };
    }//..... end of constructor() .....//

    componentDidUpdate = () => {
        this.isLoggedIn();
    };//..... end of componentDidUpdate() ....//

    isLoggedIn = () => {
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated && isAuthenticated === 'true') {
            let from = '/';
            if (this.props.location.state && this.props.location.state.from)
                from = this.props.location.state.from;
            return this.props.history.push(from);
        }
    };//..... end of isLoggedIn() .....//

    handleSignInClick = () => {
        if (!this.state.isEmailValid) {
            NotificationManager.error(`Please provide a valid email.`, 'Error');
            return false;
        }//..... end if() ....//

        if (this.state.password.length === 0) {
            NotificationManager.error(`Password is required.`, 'Error');
            return false;
        }//..... end if() .....//

        show_loader();

        axios.post(BaseUrl + '/api/login', {
            password: this.state.password,
            email:    this.state.email
        }).then((response) => {
            show_loader(true);
            if (response.data.status === true)
                this.persistUserDetails(response.data);
            else
                NotificationManager.error(response.data.message, 'Error');
        }).catch((err) => {
            show_loader(true);
            NotificationManager.error(`Internal server error occurred, Please try later.`, 'Error');
        });
    };//..... end of handleSignInClick() .....//

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };//..... end of handlePasswordChange() .....//

    handleEmailChange = (e) => {
        this.setState({email: e.target.value, isEmailValid: e.target.validity.valid});
    };//..... end of handleEmailChange() .....//

    handleCheckbox = (e) => {
        this.setState({isRemember: e.target.checked});
    };//..... end of handleCheckbox() .....//

    persistUserDetails = (data) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('isRemember', this.state.isRemember ? 'true' : 'false');
        localStorage.setItem('loggedInTime', (new Date()).getTime());
        this.isLoggedIn();
    };//..... end of persistUserDetails() .....//

    render() {
        return (
            <main className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control " name="email" required='required' value={this.state.email} onChange={this.handleEmailChange} autoFocus/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input type="password" className="form-control " name="password" required='required' value={this.state.password} onChange={this.handlePasswordChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" onClick={this.handleCheckbox}/>
                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="button" className="btn btn-primary" onClick={this.handleSignInClick}>
                                                Login
                                            </button>
                                            <a className="btn btn-link" href="#">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }//..... end of render() .....//
}//..... end of Login.

export default Login;
