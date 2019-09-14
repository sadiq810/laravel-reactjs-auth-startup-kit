import React, {Component} from 'react';
import {NotificationManager} from "react-notifications";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };

        this.isLoggedIn();
    }//..... end of constructor() .....//

    handleInputChange = (name, value) => {
        this.setState((prevState) => {
            prevState[name] = value;
            return prevState;
        });
    };

    handleRegistration = () => {
        if (!this.state.name || !this.state.email || !this.state.password || !this.state.password_confirmation) {
            NotificationManager.error('Please provide all the fields correctly.', 'Error');
            return false;
        }//..... end if() .....//

        if (this.state.password != this.state.password_confirmation) {
            NotificationManager.error('Password and confirm password don not match.', 'Error');
            return false;
        }//..... end if() .....//

        show_loader();

        axios.post(BaseUrl + '/api/register', this.state)
            .then((response) => {
                show_loader(true);
                if (response.data.status === true) {
                    NotificationManager.success(response.data.message, 'Success');
                    this.props.history.push('/login');
                } else
                    NotificationManager.error(response.data.message, 'Error');
            }).catch((err) => {
                console.log(err);
                show_loader(true);
                NotificationManager.error(`Internal server error occurred, Please try later.`, 'Error');
            });
    };//..... end of handleRegistration() ......//

    isLoggedIn = () => {
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated && isAuthenticated === 'true') {
            let from = '/';
            if (this.props.location.state && this.props.location.state.from)
                from = this.props.location.state.from;
            return this.props.history.push(from);
        }
    };//..... end of isLoggedIn() .....//

    componentDidUpdate = () => {
        this.isLoggedIn();
    };//..... end of componentDidUpdate() ....//

    render() {
        return (
            <main className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Register</div>
                                <div className="card-body">

                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control " name="name" autoFocus onChange={(e) => this.handleInputChange('name', e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control " name="email" onChange={(e) => this.handleInputChange('email', e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input type="password" className="form-control" name="password"  onChange={(e) => this.handleInputChange('password', e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                        <div className="col-md-6">
                                            <input type="password" className="form-control" name="password_confirmation"  onChange={(e) => this.handleInputChange('password_confirmation', e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="button" className="btn btn-primary" onClick={this.handleRegistration}>
                                                Register
                                            </button>
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
}//..... end of Register.

export default Register;
