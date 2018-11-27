import React from 'react';
import { Route } from 'react-router-dom';

import UserPage from './UserPage';
import Login from './Login';


class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() {
    }

    render() {

        return (
            <React.Fragment>
                <div className="root-div">
                    <div className="my-background">

                        <Route exact path="/" component={Login} />
                        <Route path="/user" component={UserPage} />

                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
