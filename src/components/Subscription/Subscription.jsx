import React, { useEffect, useState } from "react";
import { getUserSubscriptons } from "../../services/fetchUser";
import Presentation from "../Presentation/Presentation";
import LoadingView from "../LoadingView/LoadingView";
import Filter from "../Filter/FIlter";
import classes from "./Subscription.module.css";

let Subscription = () => {
  const [subscriptions, setSubscription] = useState(null);
  const [search, setSearch] = useState(null);
  let [filteredList, setFilteredList] = useState(null);

  let searchData = (value) => {
    setSearch(value);
    filter(value);
  };

  let filter = (value) => {
    setFilteredList(
      subscriptions.filter((subscription) => {
        if (subscription.name && subscription.name.startsWith(value)) {
          return subscription;
        }
      })
    );
  };

  useEffect(() => {
    let setData = async () => {
      let userData = await getUserSubscriptons("mojombo");
      setSubscription(userData);
    };
    setData();
  }, []);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>Followers:</div>
        <div className={classes.filter}>
          <Filter value={search} search={searchData}></Filter>
        </div>
      </div>
      {subscriptions ? (
        <Presentation
          elements={filteredList ? filteredList : subscriptions}
          headers={["name", "description", "html_url", "private"]}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default Subscription;
