import React from "react";
import classes from "./LoadingView.module.css";

let LoadingView = (props) => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default LoadingView;
