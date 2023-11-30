import React from "react";
import "./Home.css";
import Post from "./Post";
import FriendList from "./FriendList";
import { useSelector } from "react-redux";
import SignIn from "../Account/SignIn";

const Home = () => {
  const { loginData } = useSelector((state) => state.account);

  return (
    <>
      {loginData == null ? (
        <SignIn />
      ) : (
        <div className="main">
          <div className="right">
            <Post />
          </div>
          <div className="left">
            <FriendList />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
