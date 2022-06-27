import React from "react";
import classes from "./Presentation.module.css";

let keyCount = 0;
let getKey = () => {
  return ++keyCount;
};

let Presentation = (props) => {
  let headersElements = props.headers.map((header) => (
    <div key={getKey()} className={classes.element}>
      {header.toUpperCase()}
    </div>
  ));
  let elementslist = [];

  if (props.elements) {
    for (let element of props.elements) {
      let elementsLine = [];
      for (let varible of props.headers) {
        elementsLine.push(
          <div key={getKey()} className={classes.element}>
            {String(element[varible])}
          </div>
        );
      }
      elementslist.push(
        <div key={getKey()} className={classes.elementsLine}>
          {elementsLine}
        </div>
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
