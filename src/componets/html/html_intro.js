import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Drawer,
  Dialog,
  Paper
} from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import html5Logo from "../../assetes/images/html5.svg";
import "./html_style.css";
import LinkIcon from "@material-ui/icons/Link";
import TryHtml from "./TryHtml";
import lamp from "../../assetes/images/lamp.jpg";
import { NavLink } from "react-router-dom";
class HTML5_INTRO extends Component {
  state = {
    openTry: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  hint = text => {
    return (
      <Paper style={{ display: "flex", alignItems: "center" }}>
        <img src={lamp} />
        <p>{text}</p>
      </Paper>
    );
  };

  htmlTag = (content, tag, color) => {
    return (
      <span>
        <span>{this.openHtmlTag(tag, color)}</span>
        <span>{content}</span>
        <span>{this.closeHtmlTag(tag, color)}</span>
      </span>
    );
  };
  openHtmlTag = (tag, color) => {
    return <span style={{ color: color }}>&lt;{tag}&gt;</span>;
  };
  closeHtmlTag = (tag, color) => {
    return <span style={{ color: color }}>&lt;/{tag}&gt;</span>;
  };
  doctype = color => {
    return (
      <span style={{ color: color }}>
        &lt;!DOCTYPE <span style={{ color: "red" }}>html</span>&gt;
      </span>
    );
  };
  handleCloseTry = () => {
    this.setState({ openTry: false });
  };
  handleClickOpenTry = () => {
    this.setState({ openTry: true });
  };

  render() {
    return (
      <React.Fragment>
        {/*  try dialog*/}
        <Dialog
          fullScreen
          open={this.state.openTry}
          onClose={this.handleCloseTry}
        >
          <TryHtml
            code="<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>"
            handleCloseTry={this.handleCloseTry}
          />
        </Dialog>

        <Card dir="rtl">
          <CardContent>
            <Typography component="h1" variant="display3">
              <mark>محرر الكتابة للكتابة كود HTML</mark>
            </Typography>
            <br />
            <br />
            <hr />
            <br />

            <Typography component="p" variant="headline">
              للصناعة موقعك الخاص تحتاج الى محرر كتابة الاكواد و متصفح الإنترنت
              اي متصفح يفي بالغرض MOZILA ، CHROME ...الخ،يوجد العديد من محررات
              الاكواد المختلفة التي تستطيع كتابة كود HTML فيها من بينها نعرض لك
              هذا المحرر الرائع
              <mark> visual studio code</mark>
            </Typography>
            <p>
              <a href="https://code.visualstudio.com/">تنزيل من هذا الرابط</a>
            </p>
            <br />
            <Typography className="subTitle" component="h2" variant="display1">
              <mark>طريقة تنزيل و تتبيث visual studio code</mark>
            </Typography>

            <iframe
              style={{ width: "100%" }}
              height="450"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
            <hr />
            <br />
            <br />

            <Typography className="subTitle" component="h2" variant="display1">
              <mark>انشاء اول صفحة web </mark>
            </Typography>


            <iframe
              style={{ width: "100%" }}
              height="450"
              src="https://www.youtube.com/embed/Q7xckmx4JkM"
            />
          </CardContent>

          {this.props.next !== "" ? (
            <NavLink
               style={{
                float: "right",
                color: "#fff",
                fontWeight: "bolder",
                fontSize: 30,
                textDecoration: "none",
                backgroundColor  :"#1A73E8",
                padding : "7px 20px",
                marginBottom : 15
              }}
              to={"/html/" + this.props.next}
            >
              الدرس التالي
            </NavLink>
          ) : null}

          {this.props.prev !== "" ? (
            <NavLink
              style={{
                float: "left",
                color: "#fff",
                fontWeight: "bolder",
                fontSize: 30,
                textDecoration: "none",
                backgroundColor  :"#1A73E8",
                padding : "7px 20px",
                marginBottom : 15
              }}
              to={"/html/" + this.props.prev}
            >
             الدرس السابق
            </NavLink>
          ) : null}
        </Card>
      </React.Fragment>
    );
  }
}

export default HTML5_INTRO;
