import React from 'react';
import {link} from 'react-router';

class HomePage extends React.Component{

    render(){

        return(
            <div className="jumbotron">

                <h1>Plurasight Administration</h1>
                <p>React, Redux and React Router in ES6 ultra-responsiv web apps.</p>
                <Link to="about" className="btn btn-primary btn-log">Learn more</Link>

            </div>

        );
    }
}