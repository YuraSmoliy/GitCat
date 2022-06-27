export const getUserData = async (userName) => {
  let userData = await fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .catch(() => {});
  return userData;
};

export const getUserEvents = async (received_events_url) => {
  let userEventsData = await fetch(received_events_url)
    .then((res) => res.json())
    .catch(() => {});
  return userEventsData;
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

export const getUserFollowers = async (userName) => {
  const followers = await fetch(
    `https://api.github.com/users/${userName}/followers`
  ).then((res) => res.json());
  let followersList = [];
  for (let follower of followers) {
    followersList.push({
      id: follower.id,
      name: follower.login,
      detail: follower.url,
      type: follower.type,
    });
  }
  return followersList;
};

export const getUserSubscriptons = async (userName) => {
  const subscriptions = await fetch(
    `https://api.github.com/users/${userName}/subscriptions`
  ).then((res) => res.json());
  let subscriptionsList = [];
  for (let subscription of subscriptions) {
    subscriptionsList.push({
      name: subscription.name,
      private: subscription.private,
      description: subscription.description,
      html_url: subscription.html_url,
    });
  }
  return subscriptionsList;
};
