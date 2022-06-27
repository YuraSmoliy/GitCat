import React, { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../UserContext/UserContext";
import { getUserEvents } from "../../services/fetchUser";
import classes from "./Header.module.css";
import logo from "../../assets/github-logo.png";

let Header = () => {
  let context = useContext(UserInfoContext);
  const [events, setEvents] = useState(0);

  console.log(context.received_events_url);

  useEffect(() => {
    let setData = async () => {
      let userEvents = await getUserEvents(context.received_events);
      setEvents(userEvents);
    };
    setData();
  }, [setEvents]);

  console.log(events);

  return (
    <div className={classes.header}>
      <div className={classes.welcome}>
        Welcome to
        <p>GitCat</p>
        <img src={logo} alt="github img" />
      </div>
      <div className={classes.data}>
        <div>
          <div>Received events</div> <div>{events ? events.length : 0}</div>
          <div>Followers</div>
          <div>{context.followers}</div>
          <div>Repos</div>
          <div>{context.public_repos}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
