import React from "react";
import classes from "./Header.module.css";

let Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.welcome}>Welcome to</div>
      <div className={classes.data}>
        <div>
          <div>Received events</div>
          <div>Followers</div>
          <div>Forks</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
