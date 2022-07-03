import React from "react";
import classes from "./List.module.css";

let List = (props) => {
  return (
    <div className={classes.listContainer}>
      <div className={[classes.elementsLine, classes.tableHeader].join(" ")}>
        {props.header}
      </div>
      <div className={classes.body}>{props.elements}</div>
    </div>
  );
};

export default List;
