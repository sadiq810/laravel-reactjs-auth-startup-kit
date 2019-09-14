import React, {Component} from 'react';

class Dashboard extends Component {
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
                                <div className="card-header">Dashboard</div>

                                <div className="card-body">

                                    You are logged in!
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
