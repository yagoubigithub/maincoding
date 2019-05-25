import React, { Component } from "react";
import Header from "./componets/Header";
import Grid from "@material-ui/core/Grid";
import { Hidden, MobileStepper, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import HTML5_INTRO from "./componets/html/html_intro";
import HTML5_HOME from "./componets/html/index";
import My404Component from "./My404Component";
import { Switch, Route } from "react-router-dom";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Footer from "./componets/footer";
import BASIC_ELEMENTS from "./componets/html/basic_elemnts";

const styles = {
  root: {
    
    flexGrow: 1,
  },
};


class HTML extends Component {
  state = {
   
  };

  mapList = [
    { label: "HTML HOME", to: "home", component: <HTML5_HOME next="intro" prev="" /> },
    { label: "مقدمة في HTML 5", to: "intro", component: <HTML5_INTRO next="basic_elements" prev="home" /> },
    { label: "العناصر الاساسية للصفحة الويب", to: "basic_elements", component: <BASIC_ELEMENTS next="" prev="intro" /> }
    
  ];
 

  

  
  
 
  
  
  render() {
    
    const { classes, theme } = this.props;
   
    return (
      <div >
        <Header   tuto="html" mapList={this.mapList} />
        <Grid container>
          <Hidden mdDown>
            <Grid item md={2} />
          </Hidden>

          <Grid  item md={9}>
            <Switch >
              {this.mapList.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={"/html/" + item.to}
                    component={() =>item.component}
                   
                  />
                );
              })}
              <Route path={"/html/" + "*"} component={()=>My404Component} />
            </Switch>
          </Grid>

        </Grid>
        <Footer />
       
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HTML);
