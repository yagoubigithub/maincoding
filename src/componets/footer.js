import React, { Component } from "react";
import { Grid, Hidden } from "@material-ui/core";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        style={{
          boxSizing: "border-box",
          width: "100%",
          backgroundColor: "#111",
          color: "white",
          height: 300,
          marginTop: 50,
          padding: 15,
          paddingTop: 30
        }}
      >
        <Grid container>
          <Grid item md={8}>
            <p>Supported By : YAGOUBI ABDELKADER</p>
            <p>Mail : yagoubi.aek.2@gmail.com</p>
            <p>Tel : +213 06 56 16 21 22</p>
            <p>
              Portfolio :{" "}
              <a
                style={{ color: "lightblue" }}
                href="https://yagoubi.000webhostapp.com"
              >
                yagoubi aek
              </a>
            </p>
            <br />
          </Grid>
          <Hidden smDown>
            <Grid item md={4}>
              <svg height="200" width="220" id="logo">
                <polygon points="15,15 215,50 80,195" fill="#fff" />
                <text
                  style={{ textShadow: "1px 1px 2px white" }}
                  fill="#111"
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
            </Grid>
          </Hidden>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
