import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyNavbar from './MyNavbar';
import Home from './Home';


import MyMusic from './MyMusic';
import Friends from './Friends';
import Nearby from './Nearby';
import Rando from './Rando';




class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showThisPage: 'home',
            accessToken: null,
        };
        // declare methods here
    }

    componentDidMount() {
        console.log(this.props);
        const accessToken = this.props.location.search.split('?access_token=')[1];
        this.setState({accessToken: accessToken});
        console.log(accessToken);
    }



    render() {

        return(<React.Fragment>
            <div className="" style={{}}>

                <MyNavbar showThisPage={this.showThisPage} accessToken={this.state.accessToken} />

                <Switch>
                    <Route path={this.props.match.url + '/home'} component={Home} />
                    <Route path={this.props.match.url + '/friends'} component={Friends} />
                    {/*<Route path={this.props.match.url + '/my-music'} render={() => <MyMusic accessToken={this.state.accessToken} /> } />*/}
                    <Route path={this.props.match.url + '/my-music'} component={MyMusic} />
                    <Route path={this.props.match.url + '/rando'} component={Rando} />
                    <Route path={this.props.match.url + '/nearby'} component={Nearby} />
                    <Route path="/" component={Home} />
                </Switch>

                {/*{this.state.showThisPage === 'home' && <Home showThisPage={this.showThisPage} />}*/}



                {/*{this.state.showThisPage === 'mymusic' && <MyMusic />}*/}
                {/*{this.state.showThisPage === 'friends' && <Friends />}*/}
                {/*{this.state.showThisPage === 'nearby' && <Nearby />}*/}
                {/*{this.state.showThisPage === 'rando' && <Rando />}*/}





            </div>
        </React.Fragment>);
    }

}

export default UserPage;