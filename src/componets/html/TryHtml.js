import React, { Component } from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import logo1 from "../../assetes/images/logo1.gif";
class TryHtml extends Component {
  handelChange = () => {
    this.if_rame.setAttribute("srcdoc", this.text_area.value);
  };
  componentDidMount() {
    this.handelChange();
  }
  render() {
    return (
      <React.Fragment>
        <Paper style={{ width: "100%" }}>
          <img src={logo1} />
          <IconButton
          style={{float : "right"}}
           onClick={this.props.handleCloseTry}>
            <Close fontSize="large"/>
          </IconButton>
        </Paper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <textarea
              style={{ width: "100%", height: 500, fontSize: 19 }}
              ref={input => {
                this.text_area = input;
              }}
              onChange={this.handelChange}
            >
              {this.props.code}
            </textarea>
          </Grid>
          <Grid item xs={12} sm={6}>
            <iframe
              style={{ width: "100%", height: 500 }}
              ref={input => {
                this.if_rame = input;
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TryHtml;
