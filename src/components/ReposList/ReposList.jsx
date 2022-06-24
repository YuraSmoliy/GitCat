import React, { useEffect, useState } from "react";
import Repo from "./Repo/Repo";
import { getUserRepositories } from "../../services/fetchUser";
import classes from "./ReposList.module.css";

let ReposList = () => {
  let [data, setUserdata] = useState([]);

  useEffect(() => {
    let setData = async () => {
      let userData = await getUserRepositories("mojombo");
      setUserdata(userData);
    };
    setData();
  }, []);

  let repoList = [];
  if (data) {
    repoList = data.map((repo) => (
      <Repo
        key={repo.name}
        owner={repo.owner}
        name={repo.name}
        forks={repo.forks}
        private={repo.private.toString()}
        description={repo.description}
      />
    ));
  }

  return (
    <div>
      <ul className={classes.repo}>
        <li className={classes.repoItem}>Owner</li>
        <li className={classes.repoItem}>Name</li>
        <li className={classes.description}>Description</li>
        <li className={classes.repoItem}>Forks</li>
        <li className={classes.repoItem}>Private</li>
      </ul>
      {repoList}
    </div>
  );
};

export default ReposList;
