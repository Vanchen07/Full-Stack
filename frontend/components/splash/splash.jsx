import React from 'react';
import NavBar from './nav_bar';
import Splashbody from './splashbody';
import Footer from './footer';

class Splash extends React.Component {
   
    render () {
        return (
        <div className="splash-display">
            <NavBar {...this.props}/>
            <Splashbody {...this.props}/>
            <Footer/>
        </div>
        );
    }
}

export default Splash;