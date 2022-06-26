import React, { useContext } from "react";
import classes from "./SideMenu.module.css";
import { UserInfoContext } from "../UserContext/UserContext";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faUser,
  faUsers,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

let SideMenu = () => {
  let context = useContext(UserInfoContext);

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

        <NavLink
          to={`/users/${context.login}/reposlist`}
          className={classes.menuItem}
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          <div className={classes.category}>REPOSITORIES</div>
        </NavLink>
        <NavLink
          to={`/users/${context.login}/followers`}
          className={classes.menuItem}
        >
          <FontAwesomeIcon icon={faUsers} />
          <div className={classes.category}>FOLLOWERS</div>
        </NavLink>
        <NavLink
          to={`/users/${context.login}/subscription`}
          className={classes.menuItem}
        >
          <FontAwesomeIcon icon={faLink} />
          <div className={classes.category}>SUBSCRIPTION</div>
        </NavLink>
        <NavLink to={`/users/${context.login}`} className={classes.menuItem}>
          <FontAwesomeIcon icon={faUser} />
          <div className={classes.category}>ABOUT</div>
        </NavLink>
      </div>
    </>
  );
};

export default SideMenu;
