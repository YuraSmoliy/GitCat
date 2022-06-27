import React, { useContext } from "react";
import { UserInfoContext } from "../UserContext/UserContext";
import classes from "./UserInfo.module.css";
import LoadingView from "../LoadingView/LoadingView";

let UserInfo = (props) => {
  let context = useContext(UserInfoContext);
  let login = context.login || null;

  return (
    <>
      {login ? (
        <div className={classes.userInfoContainer}>
          <div className={classes.avatarUrl}>
            <img src={context.avatar_url} alt="" />
          </div>
          <div className={classes.userInfo}>
            <div>{context.login}</div>
            <div className={classes.accountDetails}>ACCOUNT DETAILS: </div>
            <div>
              email: {context.email ? context.email : "an email wasn't added"}
            </div>
            <div>repos: {context.repos_url}</div>
            <div>company: {context.company}</div>
            <div>blog: {context.blog}</div>
          </div>
        </div>
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default UserInfo;
