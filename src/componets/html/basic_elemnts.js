import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  
  Paper,
  CardActions,
  Button,
  Dialog
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import "./html_style.css";

import title_image_describe from "../../assetes/images/title_image_describe.png";
import lamp from "../../assetes/images/lamp.jpg";
import { NavLink } from "react-router-dom";
import TryHtml from "./TryHtml";


class BASIC_ELEMENTS extends Component {
  state = {
    openTry: false
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
  Try  = (title,code) =>{

    this.setState({
      openTry: true,
      code : code,
      title : title
    })
    
  }

  handleCloseTry = () => {
    this.setState({ openTry: false });
  };
  handleClickOpenTry = () => {
    this.setState({ openTry: true });
  };
  render() {
    const basic_elements_exemple_code="<!DOCTYPE html>\n"+

    "<html>\n"+
    
    "<head>\n"+
    
    "<title>عنوان الصفحة</title>\n"+
    
    "</head>\n"+
    
    "<body>\n\n"+
    
    
    "<h1>عنوان كبير تصنيف 1</h1>\n"+
    
    "<p>فقرة</p>\n\n"+
    
    
    "</body>\n"+
    
    "</html>\n";
    return (
      <React.Fragment>
     {/*  try dialog*/}
<Dialog
          fullScreen
          open={this.state.openTry}
          onClose={this.handleCloseTry}
          
        >
          <TryHtml code={this.state.code ? this.state.code : ""} title={this.state.title? this.state.title : ""}  handleCloseTry={this.handleCloseTry} />
        </Dialog>
        <Card dir="rtl">
          <CardContent>
            <Typography component="h1" variant="display3">
              <mark>العناصر الاساسية للصفحة الويب</mark>
            </Typography>
           
           <hr />
           <Typography component="p" variant="headline" >
           يوجد العديد من العناصر في لغة  HTML ،ولكن يوجد عناصر دائما موجودة في صفحة الويب هي  عناصر أساسية  و هي :
             </Typography>
<br />
          
         <Typography component="p" variant="h6"> 
        1-<mark> نوع الملف</mark> : DOCTYPE في راس الصفحة نحدد نوع ملف HTML لان يوجد عدة اصدارات لل HTML في هذه سسلسة سوف نتعلم الاصدار الخامس
للتحديد الاصدار الخامس لل HTML نكتب : {"<!DOCTYPE html>"}
         .</Typography>
         <Typography component="p" variant="h6">
       2- <mark>الصفحة</mark>  {"<html >"}   : هذا العنصر يحمل جميع عناصر الصفحة يعني كل ماتراه في الصفحة موجود في هذا العنصر 
        . </Typography>
         <Typography component="p" variant="h6">
         3-<mark> راس الصفحة</mark> {"<head >"} : هذا العنصر يحمل عنوان الصفحة و المكتبات المستعملة في الصفحة و وصف الصفحة سوف نتطرق بالتفصيل في هذا في الدروس القادمة  
        . </Typography>
        <Typography component="p" variant="h6">
4- <mark>عنوان الصفحة</mark>  {"<title >"} : هذا العنصر ياتي داخل العنصر {"<head >"} هذا يمثل عنوان الصفحة الظاهر في الصورة .
</Typography>
<img style={{width :  "100%",boxShadow  : "0px 0px 2px gray"}} src={title_image_describe} alt="title tag decribtion" />
          

          <Typography component="p" variant="h6">
          5 - <mark>محتوى الصفحة</mark>  {"<body >"} :  هذا ياتي كل محتوى الصفحة التي تظهر للمستخدم .
          </Typography>
          <br />
          <Typography  component="h4" variant="h4">
        <mark> انظر الى هذا المثال  :</mark> 
          </Typography>

{/************************************************************************ */}
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
               
                <p>{this.closeHtmlTag( "html", "brown")}</p>
              </code>
               
              </CardContent>
              <CardActions>
                <Button className="tryit_link" onClick={()=>this.Try("basic element HTML",
                
                
                basic_elements_exemple_code
                 )}>حاول بنفسك >></Button>
              </CardActions>
            </Card>
            

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
              className={"stepLink  prev"}
              to={"/html/" + this.props.prev}
            >
              الدرس السابق
            </NavLink>
          ) : null}
        </Card>

        <Helmet>
          <meta
            name="keywords"
            content="HTML,HTML5,HTML5 tutorial,دروس html,انشاء موقع , العناصر الاساسية في صفحة الويب"
          />
          <meta name="description" content="  العناصر الاساسية في صفحة الويب : دروس html5 html  للمبتدئين" />
          <title>العناصر الاساسية في صفحة الويب</title>
        </Helmet>
      </React.Fragment>
    );
  }
}

export default BASIC_ELEMENTS;
