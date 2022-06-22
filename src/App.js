import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import ReposList from "./components/ReposList/ReposList";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import UserInfo from "./components/UserInfo/UserInfo";
import FollowersList from "./components/FollowersList/FollowersList";
import Subscription from "./components/Subscription/Subscription";

function App() {
  return (
    <>
      <SideMenu />
      <Header />
      <Routes>
        <Route path="/" element={<ReposList />}></Route>
        <Route
          path="/users/:accountName/reposlist"
          element={<ReposList />}
        ></Route>
        <Route
          path="/users/:accountName/followers"
          element={<FollowersList />}
        ></Route>
        <Route
          path="/users/:accountName/subscription"
          element={<Subscription />}
        ></Route>
        <Route path="/users/:accountName" element={<UserInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;