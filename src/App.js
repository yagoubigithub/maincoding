import React from "react";

import "./App.css";
import Header from "./componets/Header";
import Grid from "@material-ui/core/Grid";
import {  Hidden } from "@material-ui/core";
import My404Component from './My404Component';
import HTML from "./html";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




function App() {
  return (
    <Router>
       <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/html' component={HTML} />
    
    <Route  path={"*"}   component={My404Component} />

   
</Switch>
    </Router>
   
    
  );
}

export default App;
