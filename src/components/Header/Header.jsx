import React, { useContext, useEffect, useState, memo } from "react";
import { UserInfoContext } from "../UserContext/UserContext";
import { getUserEvents } from "../../services/fetchUser";
import classes from "./Header.module.css";
import logo from "../../assets/github-logo.png";

let Header = () => {
  let context = useContext(UserInfoContext);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    let setData = async () => {
      let userEvents = await getUserEvents(context.received_events_url);
      setEvents(userEvents);
    };
    setData();
  }, [context.received_events_url]);

  return (
    <div className={classes.header}>
      <div className={classes.welcome}>
        Welcome to
        <p>GitCat</p>
        <img src={logo} alt="github img" />
      </div>
      <div className={classes.data}>
        <div className={classes.dataContainer}>
          <div className={classes.dataLine}>
            <div className={classes.key}>Received events</div>
            <div className={classes.value}>{events ? events.length : 0}</div>
          </div>
          <div className={classes.dataLine}>
            <div className={classes.key}>Followers</div>
            <div className={classes.value}>{context.followers}</div>
          </div>
          <div className={classes.dataLine}>
            <div className={classes.key}>Repos</div>
            <div className={classes.value}>{context.public_repos}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
