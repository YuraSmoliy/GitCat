const fetchUseData = async () => {
  let userData = await fetch("https://api.github.com/users")
    .then((res) => res.json())
    .catch(() => {});
  return userData;
};

export const getUserRepositories = async (userName) => {
  const repos = await fetch(
    `https://api.github.com/users/${userName}/repos`
  ).then((res) => res.json());
  let reposList = [];
  for (let repo of repos) {
    reposList.push({
      owner: repo.owner.login,
      name: repo.name,
      forks: repo.forks,
      private: repo.private,
      description: repo.description,
    });
  }
  return reposList;
};
