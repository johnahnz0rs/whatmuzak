import React from 'react';
import { Route } from 'react-router-dom';

import UserPage from './UserPage';
import Login from './Login';
import GotAccessToken from './GotAccessToken';


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
                <div className="my-background">

                    <Route path="/" exact component={Login} />
                    <Route path="/user/:token" component={GotAccessToken} />

                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
