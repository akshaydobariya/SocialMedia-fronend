import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaHeart } from "react-icons/fa";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { LikePost, UnLikePost, getAllPost } from "../ApiCalling/Post";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData } = useSelector((state) => state.account);
  const { allPost } = useSelector((state) => state.post) || { allPost: [] };

  useEffect(() => {
    dispatch(getAllPost(loginData.id));
  }, [dispatch]);

  const handleUnlike = async (userId, postId) => {
    const requestData = {
      UserId: userId,
      PostId: postId,
    };

    try {
      await dispatch(UnLikePost(requestData));
      await dispatch(getAllPost(loginData.id));
    } catch (error) {
      console.error("Error unliking the post:", error);
    }
  };

  const handleLike = async (userId, postId) => {
    const requestData = {
      UserId: userId,
      PostId: postId,
    };

    try {
      await dispatch(LikePost(requestData));
      await dispatch(getAllPost(loginData.id));
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  return (
    <div>
      {allPost?.map((each) => (
        <div key={each.id} className="main-post">
          <div className="profile">
            <img
              src={`http://localhost:7101/images/${each.user.profileImagePath}`}
              className="profile-image"
              alt=""
            />
            <div>
              <p className="username">{each.user.userName}</p>
              <p className="name">{each.name}</p>
            </div>
          </div>
          <div className="post">
            <img
              src={`http://localhost:7101/images/${each.postImagePath}`}
              className="post-image"
              alt=""
            />
          </div>
          <div className="icons">
            <div className="likeCount">
              <span className="Like-count">{each.likeCount}</span>
              {each.like ? (
                <button
                  onClick={() => handleUnlike(loginData.id, each.id)}
                  className="Like-button"
                >
                  <FaHeart className="icon" />
                </button>
              ) : (
                <button
                  onClick={() => handleLike(loginData.id, each.id)}
                  className="Like-button"
                >
                  <AiOutlineHeart className="icon" />
                </button>
              )}
            </div>
            <button
              onClick={() =>
                navigate(`/home/comment/${each.userId}/${loginData.id}`)
              }
              className="post-comment-button"
            >
              <FaRegComment className="comment-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
