import React from "react";
import classes from "./Presentation.module.css";
import Filter from "../Filter/FIlter";
import List from "./List/List";

let keyCount = 0;
let getKey = () => {
  return ++keyCount;
};

let Presentation = (props) => {
  let headersElements = React.useCallback(
    props.headers.map(
      (header) => (
        <div key={header} className={classes.element}>
          {header}
        </div>
      ),
      []
    )
  );

  let elementslist = [];

  if (props.elements) {
    for (let element of props.elements) {
      let elementsLine = [];
      for (let varible of props.headers) {
        elementsLine.push(
          <div
            key={"" + getKey() + element[varible]}
            className={classes.element}
          >
            {String(element[varible])}
          </div>
        );
      }
      let elementKey = "";
      for (let value in element) {
        elementKey += element[value];
      }

      elementslist.push(
        <div key={elementKey} className={classes.elementsLine}>
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

      <List header={headersElements} elements={elementslist} />
    </div>
  );
};

export default Presentation;
