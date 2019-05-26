import React, { Component } from "react";

import {  Grid, Hidden, Drawer, Paper } from "@material-ui/core";
import "./header_style.css";
import { NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';

class Header extends Component {
  state = {
    help: false,
    map: false,

    tuto: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
    //console.log(this.props.location.pathname);
  };

  render() {
    return (
      <Grid container>
        <Drawer
          open={this.state.help}
          onClose={this.toggleDrawer("help", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("help", false)}
            onKeyDown={this.toggleDrawer("help", false)}
          />
        </Drawer>
        <Drawer
          anchor="right"
          open={this.state.map}
          onClose={this.toggleDrawer("map", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("map", false)}
            onKeyDown={this.toggleDrawer("map", false)}
          >
            {/*sidelist map*/}
            {this.props.mapList.map((item, index) => {
              return (
                <NavLink dir="rtl" className={"mapLink"}   to={"/" + this.props.tuto + "/" + item.to} key={index}>
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </Drawer>
        <Drawer
          anchor="top"
          open={this.state.tuto}
          onClose={this.toggleDrawer("tuto", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("tuto", false)}
            onKeyDown={this.toggleDrawer("tuto", false)}
          >
            {/*sidelist tuto*/}
            <Paper>
              <h1>hELLO WORLD</h1>
            </Paper>
          </div>
        </Drawer>
        <Hidden smDown>
          <Grid item sm={3} md={2}>
            <span >
              <a href="html_1.html">
                <svg height="200" width="220" id="logo">
                  <polygon points="15,15 215,50 80,195" fill="#9932CC" />
                  <text
                    style={{ textShadow: "1px 1px 2px black" }}
                    fill="white"
                    fontSize="100"
                    fontWeight="bold"
                    fontFamily="Verdana"
                    letterSpacing="-3px"
                    x="20"
                    y="130"
                    id="text"
                  >
                    MC
                  </text>
                </svg>
              </a>
            </span>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <div
            style={{
              background: "#9932CC",
              border: "5px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 15
            }}
          >
            <ul className="header_menu">
              <li>
                {" "}
                <svg width="40" height="36">
                  <polygon
                    points="20,2 40,18 32,18 32,36 24,36 24,26 16,26 16,36 8,36 8,18 0,18"
                    fill="white"
                  />
                </svg>
              </li>
              <li>
                <NavLink
                 
                  to="/html/home"
                 
                  className={this.props.location.pathname.indexOf("html") >  - 1 ? "active" :"noactive"}
                >
                  HTML
                </NavLink>
              </li>
              <li>
              <NavLink
                
                  to="/css/intro"
                 
                  className={this.props.location.pathname.indexOf("css") >  - 1 ? "active" :"noactive"}
                >
              CSS</NavLink></li>
              <li>Javascript</li>
              <li onClick={this.toggleDrawer("tuto", true)}>Tutoriale</li>
            </ul>

            <ul className="header_menu">
              <li onClick={this.toggleDrawer("help", true)}>Help</li>
              <li onClick={this.toggleDrawer("map", true)}>Map</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Header);
