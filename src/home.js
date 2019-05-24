import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            hello home
            <li><Link to={'/html/home'} className="nav-link"> html </Link></li>
            </div>
         );
    }
}
 
export default Home;