import React, { useEffect, useState } from "react";
import { getUserFollowers } from "../../services/fetchUser";
import LoadingView from "../LoadingView/LoadingView";
import Presentation from "../Presentation/Presentation";

let Followers = () => {
  const [followers, setFollowers] = useState(null);
  useEffect(() => {
    let setData = async () => {
      let userData = await getUserFollowers("mojombo");
      setFollowers(userData);
    };
    setData();
  }, []);

  return (
    <div>
      {followers ? (
        <Presentation
          elements={followers}
          headers={["id", "name", "detail", "type"]}
        />
      ) : (
        <LoadingView />
      )}
    </div>
  );
};

export default Followers;
