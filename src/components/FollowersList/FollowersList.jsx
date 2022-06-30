import React, { useEffect, useState } from "react";
import { getUserFollowers } from "../../services/fetchUser";
import LoadingView from "../LoadingView/LoadingView";
import Presentation from "../Presentation/Presentation";

let Followers = () => {
  const [followers, setFollowers] = useState(null);
  const [search, setSearch] = useState("");
  let [filteredList, setFilteredList] = useState(null);

  let searchData = (value) => {
    setSearch(value);
    filter(value);
  };

  let filter = (value) => {
    setFilteredList(
      followers.filter((follower) => {
        if (follower.name && follower.name.startsWith(value)) {
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
    <>
      {followers ? (
        <Presentation
          elements={filteredList ? filteredList : followers}
          headers={["id", "name", "detail", "type"]}
          serchValue={search}
          setSearchData={searchData}
          section={"Followers:"}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default Followers;
