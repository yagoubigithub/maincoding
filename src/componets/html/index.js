import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  
  Dialog,
  Paper
} from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import html5Logo from "../../assetes/images/html5.svg";
import "./html_style.css";
import TryHtml from "./TryHtml";
import lamp from '../../assetes/images/lamp.jpg';
import { NavLink } from "react-router-dom";

import {Helmet} from "react-helmet";

class HTML5_HOME extends Component {
  state = {
    openTry : false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  hint = (text) =>{

    return <Paper
    style={{display : "flex", alignItems :  "center"}}
    ><img src={lamp} /><p>{text}</p></Paper>
  }
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
          <TryHtml code="<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>"  handleCloseTry={this.handleCloseTry} />
        </Dialog>

        <Card dir="rtl">
          <CardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={html5Logo}
                style={{ width: 150, height: 150, float: "right" }}
              />
              <Typography component="h1" variant="display3">
                <mark>دروس HTML5</mark>
              </Typography>
            </div>
            <br />
            <br />
            <Typography className="subTitle" component="h2" variant="display1">
              <mark>مقدمة</mark>
            </Typography>
            <Card style={{ background: green[100], padding: 15 }}>
              <Typography variant="title">
                لغة HTML هي الغة التي تمكنك من بناء موقعك الخاص
              </Typography>
              <Typography variant="title">
                من خلال هذه السلسلة سوف تتعلم كل مايخص لغة HTML بطريقة ممتعة مع
                الكثير من الامثلة
              </Typography>
              <Typography variant="title">
                لغة HTML هي لغة سهلة التعلم بل هي الاسهل
              </Typography>
            </Card>
            <br />
            <hr /> <br />
            <Typography className="subTitle" component="h2" variant="display1">
              <mark>امثلة في كل درس</mark>
            </Typography>
            <Card style={{ padding: 15 }}>
              <Typography component="p" variant="headline">
                هذه السلسلة تحتوي على المئات من الامثلة
              </Typography>
              <Typography component="p" variant="headline">
                بواسطة محرر الاكواد الخاص بالموقع يكنك كتابة كود HTML ورؤية
                النتيجة مباشرة
              </Typography>
            </Card>
            <Card dir="ltr" className="exampleCard">
              <Typography
                className="subTitle"
                component="h2"
                variant="display1"
              >
                <mark>Example</mark>
              </Typography>

              <CardContent className="codeBlock" style={{ background: "white" }}>
              <code>
              <p>{this.doctype("brown")}</p>
                <p>{this.openHtmlTag( "html", "brown")}</p>
                <p>{this.openHtmlTag( "head", "brown")}</p>
                <p>{this.htmlTag("عنوان الصفحة", "title", "brown")}</p>
                <p>{this.closeHtmlTag( "head", "brown")}</p>
                <p>{this.openHtmlTag( "body", "brown")}</p>
                <br></br>
                <p>{this.htmlTag("عنوان كبير تصنيف 1", "h1", "brown")}</p>
                <p>{this.htmlTag("فقرة", "p", "brown")}</p>
               
                <br></br>
                <p>{this.closeHtmlTag( "body", "brown")}</p>
                <p>{this.closeHtmlTag( "head", "brown")}</p>
                <p>{this.closeHtmlTag( "html", "brown")}</p>
              </code>
               
              </CardContent>
              <CardActions>
                <Button className="tryit_link" onClick={this.handleClickOpenTry}>حاول بنفسك >></Button>
              </CardActions>
            </Card>

            <br></br>
            {this.hint("انقر فوق الزر 'حاول بنفسك >>' لترى كيف تعمل.")}
          </CardContent>
          {this.props.next !== "" ? (
            <NavLink
               className={"stepLink next"}
              to={"/html/" + this.props.next}
            >
              الدرس التالي
            </NavLink>
          ) : null}

          {this.props.prev !== "" ? (
            <NavLink
            className={"stepLink prev"}
              to={"/html/" + this.props.prev}
            >
             الدرس السابق
            </NavLink>
          ) : null}
        </Card>

        <Helmet>
        <meta name="keywords" content="HTML,HTML5,HTML5 tutorial,دروس html,انشاء موقع" />
      <meta
        name="description"
        content=" دروس html5 html  للمبتدئين"
      />
      <title>Home Html</title>
        </Helmet>
      </React.Fragment>
    );
  }
}

export default HTML5_HOME;
