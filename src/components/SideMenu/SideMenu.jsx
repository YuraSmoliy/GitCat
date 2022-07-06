import React, { useContext, memo } from "react";
import classes from "./SideMenu.module.css";
import { UserInfoContext } from "../UserContext/UserContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faUser,
  faUsers,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {
  const context = useContext(UserInfoContext);

  const respositoriesRoutPath = `/users/${context.login}/reposlist`;
  const followersRoutPath = `/users/${context.login}/followers`;
  const subscriptionRoutPath = `/users/${context.login}/subscription`;
  const userRoutPath = `/users/${context.login}/`;

  const createLink = (to, icon, category) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? [classes.menuItemActove] : classes.menuItem
        }
      >
        <FontAwesomeIcon icon={icon} />
        <div className={classes.category}>{category}</div>
      </NavLink>
    );
  };

  return (
    <>
      <div className={classes.sidemenu}>
        <div className={classes.logoContainer}>
          <img src={context.avatar_url} alt="" className={classes.logo} />
        </div>
        <div className={classes.userShortInfo}>
          <div>{context.login}</div>
          <div>{context.email ? context.email : "An email wasn't added"}</div>
        </div>
        <div className={classes.navigationContainer}>
          {createLink(respositoriesRoutPath, faCodeBranch, "REPOSITORIES")}
          {createLink(followersRoutPath, faUsers, "FOLLOWERS")}
          {createLink(subscriptionRoutPath, faLink, "SUBSCRIPTION")}
          {createLink(userRoutPath, faUser, "ABOUT")}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
