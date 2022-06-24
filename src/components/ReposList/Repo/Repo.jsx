import React from "react";
import classes from "./Repo.module.css";

let Repo = (props) => {
  console.log(props.private);
  return (
    <div>
      <ul className={classes.repo}>
        <li className={classes.repoItem}>{props.owner}</li>
        <li className={classes.repoItem}>{props.name}</li>
        <li className={classes.description}>{props.description}</li>
        <li className={classes.repoItem}>{props.forks}</li>
        <li className={classes.repoItem}>{props.private}</li>
      </ul>
    </div>
  );
};

export default Repo;
