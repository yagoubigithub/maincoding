import React, { Component } from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import logo1 from "../../assetes/images/logo1.gif";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/monokai";
class TryHtml extends Component {
  handelChange = code => {
    this.if_rame.setAttribute("srcdoc", code);
  };
  componentDidMount() {
    this.if_rame.setAttribute("srcdoc", this.props.code);
  }
  render() {
    
    return (
      <React.Fragment>
        <Paper style={{ width: "100%" }}>
          <img src={logo1} />
          <IconButton
            style={{ float: "right" }}
            onClick={this.props.handleCloseTry}
            color="secondary"
          >
            <Close fontSize="large" />
          </IconButton>
        </Paper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <AceEditor
              value={this.props.code}
              mode="html"
              theme="monokai"
              onChange={this.handelChange}
              name="textarea"
              ref={input => {
                this.text_area = input;
              }}
              style={{width : "100%"}}
              editorProps={{ $blockScrolling: true }}
              fontSize={18}
            />
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
