import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     // bind methods here
    // }

    componentDidMount() { }




    render() {

        const pageButtons = {
            whiteSpace: 'normal',
            fontWeight: 'bold',
            width: '150px',
            height: '200px',
            fontSize: 'xx-large',
            WebkitTextStroke: '1px teal',
            color: 'white',
            border: '5px solid teal',
        };

        return (<React.Fragment>
            <div>

                <h1 className="text-center font-weight-bold">Welcome</h1>

                <div className="container-fluid text-center mt-3" style={{}}>
                    <div className="">
                        <Link to={"/user/my-music"}>
                            <button name="mymusic" className="btn btn-lg btn-outline-success m-3" style={pageButtons}>My Music</button>
                        </Link>
                        <Link to={"/user/friends"}>
                            <button name="friends" className="btn btn-lg btn-outline-success m-3" style={pageButtons}>Search for Friends</button>
                        </Link>
                    </div>
                    <div className="">
                        <Link to={"/user/nearby"}>
                            <button name="nearby" className="btn btn-lg btn-outline-success m-3" style={pageButtons}>Find Nearby</button>
                        </Link>
                        <Link to={"/user/rando"}>
                            <button name="rando" className="btn btn-lg btn-outline-success m-3" style={pageButtons}>Meet a Rando</button>
                        </Link>
                    </div>
                </div>

            </div>
        </React.Fragment>);
    }

}

export default Home;