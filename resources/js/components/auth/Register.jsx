import React, {Component} from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
    }//..... end of constructor() .....//

    render() {
        return (
            <main className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Register</div>
                                <div className="card-body">
                                    <form method="POST" action="http://localhost/laravel6/public/register">
                                        <input type="hidden" name="_token"
                                               defaultValue="jwFCl2PzgEP9MKgphNNRvWn1j6Pga8q9ow9RJA9B"/>
                                        <div className="form-group row">
                                            <label htmlFor="name"
                                                   className="col-md-4 col-form-label text-md-right">Name</label>
                                            <div className="col-md-6">
                                                <input id="name" type="text" className="form-control " name="name" required autoComplete="name" autoFocus/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail
                                                Address</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control " name="email" required autoComplete="email"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="password"
                                                   className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control "
                                                       name="password" required autoComplete="new-password"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="password-confirm"
                                                   className="col-md-4 col-form-label text-md-right">Confirm
                                                Password</label>
                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password" className="form-control"
                                                       name="password_confirmation" required
                                                       autoComplete="new-password"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-0">
                                            <div className="col-md-6 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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
