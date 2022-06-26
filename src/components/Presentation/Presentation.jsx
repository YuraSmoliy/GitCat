import React from "react";
import LoadingView from "../LoadingView/LoadingView";
import classes from "./Presentation.module.css";

let Presentation = (props) => {
  let headersElements = props.headers.map((header) => (
    <div className={classes.element}>{header.toUpperCase()}</div>
  ));

  let elementslist = [];

  if (props.elements) {
    for (let element of props.elements) {
      let elementsLine = [];
      for (let varible of props.headers) {
        elementsLine.push(
          <div className={classes.element}>{String(element[varible])}</div>
        );
      }
      elementslist.push(
        <div className={classes.elementsLine}>{elementsLine}</div>
      );
    }
  }

  return (
    <div className={classes.elementsContainer}>
      <div className={[classes.elementsLine, classes.header].join(" ")}>
        {headersElements}
      </div>
      <div>{elementslist}</div>
    </div>
  );
};

export default Presentation;
