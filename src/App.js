import React from "react";

import "./App.css";

import My404Component from "./My404Component";
import HTML from "./html";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./componets/footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/html" component={HTML} />

          <Route path={"*"} component={My404Component} />
        </Switch>
      </Router>

     
    </React.Fragment>
  );
}

export default App;
