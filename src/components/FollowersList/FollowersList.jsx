import React, { useEffect, useState } from "react";
import { getUserFollowers } from "../../services/fetchUser";
import LoadingView from "../LoadingView/LoadingView";
import Presentation from "../Presentation/Presentation";
import Filter from "../Filter/FIlter";
import classes from "./Followers.module.css";

let Followers = () => {
  const [followers, setFollowers] = useState(null);
  const [search, setSearch] = useState(null);
  let [filteredList, setFilteredList] = useState(null);

  let searchData = (value) => {
    setSearch(value);
    filter(value);
  };

  let filter = (value) => {
    setFilteredList(
      followers.filter((follower) => {
        if (follower.name.startsWith(value)) {
          return follower;
        }
      })
    );
  };

  useEffect(() => {
    let setData = async () => {
      let userData = await getUserFollowers("mojombo");
      setFollowers(userData);
    };
    setData();
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>Followers:</div>
        <div className={classes.filter}>
          <Filter value={search} search={searchData}></Filter>
        </div>
      </div>
      {followers ? (
        <Presentation
          elements={filteredList ? filteredList : followers}
          headers={["id", "name", "detail", "type"]}
        />
      ) : (
        <LoadingView />
      )}
    </div>
  );
};

export default Followers;
