import React, { useEffect, useState } from "react";
import { getUserRepositories } from "../../services/fetchUser";
import Presentation from "../Presentation/Presentation";
import LoadingView from "../LoadingView/LoadingView";

let ReposList = () => {
  let [data, setUserdata] = useState(null);

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
          elements={data}
          headers={["owner", "name", "description", "forks", "private"]}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default ReposList;
