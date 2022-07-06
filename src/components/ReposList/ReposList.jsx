import React, { useEffect, useState, memo } from "react";
import { getUserRepositories } from "../../services/fetchUser";
import Presentation from "../Presentation/Presentation";
import LoadingView from "../LoadingView/LoadingView";

let ReposList = () => {
  let [data, setUserdata] = useState(null);
  const [search, setSearch] = useState("");
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
      {data ? (
        <Presentation
          elements={filteredList ? filteredList : data}
          headers={["owner", "name", "description", "forks", "private"]}
          serchValue={search}
          setSearchData={searchData}
          section={"Repositories:"}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default ReposList;
