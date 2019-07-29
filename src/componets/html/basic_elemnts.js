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
import DocumentMeta from 'react-document-meta';
import "./html_style.css";

import title_image_describe from "../../assetes/images/title_image_describe.png";
import lamp from "../../assetes/images/lamp.jpg";
import { NavLink } from "react-router-dom";
import TryHtml from "./TryHtml";
import AceEditor from "react-ace";

const page = {
  meta : {
    title: "العناصر الاساسية للصفحة الويب",
    description: 'العناصر الاساسية في صفحة الويب : دروس html5 html  للمبتدئين',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'HTML,HTML5,HTML5 tutorial,دروس html,انشاء موقع , العناصر الاساسية في صفحة الويب'
      }
    }
  },
  title: "العناصر الاساسية للصفحة الويب",
  path: "basic_elements",
  tuto: "html",
  
  intro: "",
  content: [
    {
      id: "1",
      type: "text",
      content:
        "يوجد العديد من العناصر في لغة HTML ،ولكن يوجد عناصر دائما موجودة في صفحة الويب هي عناصر أساسية و هي :"
    },
    {
      id : "2",
      type: "titled-text",
      title: " نوع الملف",
      content:
        "DOCTYPE في راس الصفحة نحدد نوع ملف HTML لان يوجد عدة اصدارات لل HTML في هذه سسلسة سوف نتعلم الاصدار الخامس للتحديد الاصدار الخامس لل HTML نكتب : <!DOCTYPE html>."
    },
    {
      id :  "3",
      type: "titled-text",
      title: " الصفحة <html > ",
      content:
        " هذا العنصر يحمل جميع عناصر الصفحة يعني كل ماتراه في الصفحة موجود في هذا العنصر ."
    },
    {
      id :  "4",
      type: "titled-text",
      title: " راس الصفحة <head > ",
      content:
        " هذا العنصر يحمل عنوان الصفحة و المكتبات المستعملة في الصفحة و وصف الصفحة سوف نتطرق بالتفصيل في هذا في الدروس القادمة ."
    },
    {
      id :  "5",
      type: "titled-text",
      title: "عنوان الصفحة <title >",
      content:
        " هذا العنصر ياتي داخل العنصر <head > هذا يمثل عنوان الصفحة الظاهر في الصورة ."
    },
    {
      id :  "6",
      type: "image",
      alt: "",
      url: "https://fossbytes.com/wp-content/uploads/2018/09/Best-Free-Websites-To-Watch-Bollywood-Movies-Online.jpg"
    },
    {
      id :  "7",
      type: "titled-text",
      title: "محتوى الصفحة <body >",
      content: " هذا ياتي كل محتوى الصفحة التي تظهر للمستخدم ."
    },
    {
      id :  "8",
      type: "try",
      title: "انظر الى هذا المثال",
      code: [
        "<!DOCTYPE html>",

        "<html>",

        " <head>",

        "<title>عنوان الصفحة</title>",

        "</head>",

        "<body>",

        "<h1>عنوان كبير تصنيف 1</h1>",

        "<p>فقرة</p>",

        "</body>",

        "</html>"
      ]
    }
    ,
    {
      id :  "9",
      type: "try",
      title: "انظر الى هذا المثال",
      code: [
        "<!DOCTYPE html>",

        "<html>",

        " <head>",

        "<title>dczdczc الصفحة</title>",

        "</head>",

        "<body>",

        "<h1>عنوان eczeczeczdc تصنيف 1</h1>",

        "<p>zdczdcdcdczdcc</p>",

        "</body>",

        "</html>"
      ]
    }
  ]
};
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

  
  Try = (title, code) => {
    this.setState({
      openTry: true,
      code: code,
      title: title
    });
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
       <DocumentMeta {...page.meta}>
        {/*  try dialog*/}
        

        <Card dir="rtl">
        <CardContent>
            <Typography component="h1" variant="h3">
              {page.title}
            </Typography>
            <br />
            <br />
            <hr />
            <br />

            {page.content.map(item=>{
              if(item.type === "text"){
                return (
                 <p className="text" key={item.id}>
                 {item.content}
                 </p>
                    
                
                )
              }else if(item.type === "titled-text"){
                return (
                  <p className="titled-text" key={item.id}>
                  <span ><u><b>{item.title} : </b></u></span> {item.content}
                  </p>
                  
                 
                )
              }else if(item.type === "image"){
                return (
                  <img key={item.id} src={item.url} alt={item.alt}  style={{ width: "100%", boxShadow: "0px 0px 2px gray" }} />
                  
                )
              }else if(item.type === "try"){
                let code = "";
                item.code.map(c=>{
                  code = code + c + "\n";
                })
                return (
                  <div key={item.id}>
                  <h4 className="subTitle">{item.title}</h4>
                  <Card dir="ltr">
                 <AceEditor
                  mode="html"
                  style={{width : "100%"}}
                  fontSize={20}
                  value={code}
                  editorProps={{ $blockScrolling: false }}
                  maxLines={item.code.length + 3}
                  readOnly
                  showGutter={false}
                  />
                   <CardActions>
                <Button
                  className="tryit_link"
                  onClick={() =>
                    this.Try(
                      "basic element HTML",

                      code
                    )
                  }
                >
                  حاول بنفسك >>
                </Button>
              </CardActions>
                    
                  </Card>
                  </div>
                 
                )
              }
            })}
            </CardContent>

        </Card>

        <Dialog
          fullScreen
          open={this.state.openTry}
          onClose={this.handleCloseTry}
        >
          <TryHtml
            code={this.state.code ? this.state.code : ""}
            title={this.state.title ? this.state.title : ""}
            handleCloseTry={this.handleCloseTry}
          />
        </Dialog>
     
        
          
           


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
        

       
          
        </DocumentMeta>
      </React.Fragment>
    );
  }
}

export default BASIC_ELEMENTS;
