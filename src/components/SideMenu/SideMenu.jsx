import React from "react";
import classes from "./SideMenu.module.css";
import UserInfo from "../UserInfo/UserInfo";
import logo from "../../github-brands.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { brands, faGithub } from "@fortawesome/free-solid-svg-icons";
import {
  faCodeBranch,
  faUser,
  faUsers,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

let SideMenu = () => {
  return (
    <>
      {/* <FontAwesomeIcon icon={faGithub} /> */}
      <div className={classes.sidemenu}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="" className={classes.logo} />
        </div>
        <div className={classes.userShortInfo}>
          <div>JOHN DOE</div>
          <div>john.doe@gmail.com</div>
        </div>

        <Link to="/reposlist" className={classes.menuItem}>
          <FontAwesomeIcon icon={faCodeBranch} />
          <div className={classes.category}>REPOSITORIES</div>
        </Link>
        <Link to="/followers" className={classes.menuItem}>
          <FontAwesomeIcon icon={faUsers} />
          <div className={classes.category}>FOLLOWERS</div>
        </Link>
        <Link to="/subscription" className={classes.menuItem}>
          <FontAwesomeIcon icon={faLink} />
          <div className={classes.category}>SUBSCRIPTION</div>
        </Link>
        <Link to="/users" className={classes.menuItem}>
          <FontAwesomeIcon icon={faUser} />
          <div className={classes.category}>ABOUT</div>
        </Link>
      </div>
    </>
  );
};

export default SideMenu;
