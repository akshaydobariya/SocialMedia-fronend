import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FollowerCount,
  FollowingCount,
  PostCount,
  PostCountImage,
} from "../ApiCalling/Post";
import "./Profile.css";

const Profile = () => {
  const { loginData } = useSelector((state) => state.account);
  const { postCount, userPostImage, followerCount, followingCount } =
    useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostCount = async () => {
      if (loginData) {
        try {
          await dispatch(PostCount(loginData.id));
          await dispatch(PostCountImage(loginData.id));
          await dispatch(FollowerCount(loginData.id));
          await dispatch(FollowingCount(loginData.id));
        } catch (error) {
          console.error("Error fetching post count:", error);
        }
      }
    };

    fetchPostCount();
  }, [dispatch, loginData]);

  return (
    <div className="main-profile-container">
      <div className="main-profile-header">
        <img
          src={`http://localhost:7101/images/${loginData.profileImagePath}`}
          alt="Profile"
          className="main-profile-picture"
        />
        <div className="main-profile-info">
          <h1 className="username">{loginData?.name}</h1>
          <p className="bio">A short bio about yourself.</p>
          <div className="follow-stats">
            <p className="stat">
              <strong>Posts:</strong> {postCount}
            </p>
            <p className="stat">
              <strong>Followers:</strong> {followerCount}
            </p>
            <p className="stat">
              <strong>Following:</strong> {followingCount}
            </p>
          </div>
        </div>
      </div>

      <div className="main-container">
        {userPostImage?.map((each) => (
          <img
            src={`http://localhost:7101/images/${each.postImagePath}`}
            alt="Post"
            className="main-profile-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
