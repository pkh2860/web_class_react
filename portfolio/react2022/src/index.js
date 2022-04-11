//출력하기

import React from "react"; //리액트 실행 
import ReactDom from "react-dom";

  function Hello(props){
    return <h1>hello, {props.name}</h1>
  }
  
  const element = <Hello name = "webs" />; 

  ReactDom.render(element, document.getElementById("root"));
