import React, {Component} from 'react';
import {NotificationManager} from "react-notifications";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }//..... end of constructor() .....//

    componentDidMount() {
        this.getLoggedInUserToTestPrivateRoute();
    }//..... end of componentDidMount() .....//

    getLoggedInUserToTestPrivateRoute = () => {
        show_loader();
        axios.get(BaseUrl + '/api/user', {}).then((response) => {
            show_loader(true);
           this.setState(() => {
               return {user: response.data}
           });
        }).catch((err) => {
            show_loader(true);
            NotificationManager.error(`Internal server error occurred, Please try later.`, 'Error');
        });
    };//..... end of getLoggedInUserToTestPrivateRoute() .....//

    render() {
        return (
            <main className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Dashboard</div>

                                <div className="card-body">
                                    You are logged in!
                                    <hr/>
                                    LoggedIn User details <br/>
                                    { JSON.stringify(this.state.user) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }//..... end of render() .....//
}//..... end of Dashboard.

export default Dashboard;
