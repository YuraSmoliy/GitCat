import React from "react";
import classes from "./Presentation.module.css";
import Filter from "../Filter/FIlter";

let keyCount = 0;
let getKey = () => {
  return ++keyCount;
};

let Presentation = (props) => {
  let headersElements = props.headers.map((header) => (
    <div key={getKey()} className={classes.element}>
      {header}
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
      <div className={classes.header}>
        <div>
          <div className={classes.title}>{props.section}</div>
          <div className={classes.overview}>Overview of GitHub</div>
        </div>
        <div className={classes.filter}>
          <Filter value={props.serValue} search={props.setSearchData}></Filter>
        </div>
      </div>

      <div className={[classes.elementsLine, classes.tableHeader].join(" ")}>
        {headersElements}
      </div>
      <div className={classes.body}>{elementslist}</div>
    </div>
  );
};

export default Presentation;
