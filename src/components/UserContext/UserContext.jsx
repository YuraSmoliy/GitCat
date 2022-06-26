import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { getUserData } from "../../services/fetchUser";

export const UserInfoContext = createContext();
let UserInfoData = (props) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    let setData = async () => {
      let userData = await getUserData("mojombo");
      setUserInfo(userData);
    };
    setData();
  }, []);
  console.log(userInfo);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoData;
