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
        <Route path="/reposlist" element={<ReposList />}></Route>
        <Route path="/followers" element={<FollowersList />}></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/users" element={<UserInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
