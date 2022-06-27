import React, { useEffect, useState } from "react";
import { getUserRepositories } from "../../services/fetchUser";
import Presentation from "../Presentation/Presentation";
import LoadingView from "../LoadingView/LoadingView";
import Filter from "../Filter/FIlter";
import classes from "./ReposList.module.css";

let ReposList = () => {
  let [data, setUserdata] = useState(null);
  const [search, setSearch] = useState(null);
  let [filteredList, setFilteredList] = useState(null);

  let searchData = (value) => {
    setSearch(value);
    filter(value);
  };

  let filter = (value) => {
    setFilteredList(
      data.filter((repo) => {
        if (repo.name && repo.name.startsWith(value)) {
          return repo;
        }
      })
    );
  };

  useEffect(() => {
    let setData = async () => {
      let userData = await getUserRepositories("mojombo");
      setUserdata(userData);
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
      {data ? (
        <Presentation
          elements={filteredList ? filteredList : data}
          headers={["owner", "name", "description", "forks", "private"]}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default ReposList;
