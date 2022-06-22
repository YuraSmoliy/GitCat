import React from "react";
import classes from "./SideMenu.module.css";
import UserInfo from "../UserInfo/UserInfo";
import logo from "../../github-brands.svg";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { brands, faGithub } from "@fortawesome/free-solid-svg-icons";
import {
  faCodeBranch,
  faUser,
  faUsers,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

let SideMenu = () => {
  const params = 1;
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

        <NavLink to={`/users/${params}/reposlist`} className={classes.menuItem}>
          <FontAwesomeIcon icon={faCodeBranch} />
          <div className={classes.category}>REPOSITORIES</div>
        </NavLink>
        <NavLink to={`/users/${params}/followers`} className={classes.menuItem}>
          <FontAwesomeIcon icon={faUsers} />
          <div className={classes.category}>FOLLOWERS</div>
        </NavLink>
        <NavLink
          to={`/users/${params}/subscription`}
          className={classes.menuItem}
        >
          <FontAwesomeIcon icon={faLink} />
          <div className={classes.category}>SUBSCRIPTION</div>
        </NavLink>
        <NavLink to={`/users/${params}`} className={classes.menuItem}>
          <FontAwesomeIcon icon={faUser} />
          <div className={classes.category}>ABOUT</div>
        </NavLink>
      </div>
    </>
  );
};

export default SideMenu;
