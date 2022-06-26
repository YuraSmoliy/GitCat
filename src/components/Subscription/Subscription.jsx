import React, { useEffect, useState } from "react";
import { getUserSubscriptons } from "../../services/fetchUser";
import Presentation from "../Presentation/Presentation";
import LoadingView from "../LoadingView/LoadingView";

let Subscription = () => {
  const [subscriptions, setSubscription] = useState(null);
  useEffect(() => {
    let setData = async () => {
      let userData = await getUserSubscriptons("mojombo");
      setSubscription(userData);
    };
    setData();
  }, []);

  return (
    <div>
      {subscriptions ? (
        <Presentation
          elements={subscriptions}
          headers={["name", "description", "html_url", "private"]}
        />
      ) : (
        <LoadingView />
      )}
    </div>
  );
};

export default Subscription;
