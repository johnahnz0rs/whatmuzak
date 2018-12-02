import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const spotifyLoginURL = 'http://localhost:5000/api/login-spotify';
// const spotifyLoginURL = 'https://whatmuzak.herokuapp.com/api/login-spotify';
// const spotifyLoginURL = '/api/login-spotify';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        // declare methods here
        this.signInWithSpotify = this.signInWithSpotify.bind(this);
    }

    componentDidMount() { }

    signInWithSpotify = () => {
        axios.get(spotifyLoginURL)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    render() {

        return(
            <React.Fragment>
                <div className="container">

                    <h5 className="propaganda-text-stroke mb-5 ml-auto text-center" style={{width: '50%'}}>Musical compatibility is important to many people. And that makes sense - music is really intimate; it's emotional.</h5>


                    <h4 className="propaganda-text-stroke-black mb-2 mx-auto text-center" style={{width: '50%'}}>Find your<br/> music soulmate.</h4>
                    <div className="text-center">
                        {/*<button*/}
                            {/*className="btn btn-sm btn-outline-primary"*/}
                            {/*style={{borderWidth: '2px'}}*/}
                            {/*onClick={this.signInWithSpotify}>*/}
                            {/*<span className="font-weight-bold"><u>Sign in with Spotify</u></span>*/}
                        {/*</button>*/}
                        <a href={spotifyLoginURL}>
                            <button
                                className="btn btn-sm btn-outline-primary"
                                style={{borderWidth: '2px'}}
                                onClick={this.signInWithSpotify}>
                                <span className="font-weight-bold"><u>Sign in with Spotify</u></span>
                            </button>
                        </a>
                    </div>

                </div>

            </React.Fragment>
        );
    }

}

export default Login;