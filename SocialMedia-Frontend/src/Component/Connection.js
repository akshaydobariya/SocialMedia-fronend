import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AcceptFriendRequest, FriendRequest } from "../ApiCalling/Account";
import Button from "../common/Button"; // Import the Button component
import "./Connection.css";

const Connection = () => {
  const { loginData, friendRequest } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFriendRequest = async () => {
      if (loginData) {
        try {
          await dispatch(FriendRequest(loginData.id));
        } catch (error) {
          console.error("Error fetching friend requests:", error);
        }
      }
    };

    fetchFriendRequest();
  }, [dispatch]);

  const handleAcceptFriendRequest = async (userId) => {
    const data = {
      userId,
      senderId: loginData.id,
    };
    await dispatch(AcceptFriendRequest(data));
    await dispatch(FriendRequest(loginData.id));
  };

  return (
    <div className="connectionList" style={{ minHeight: "80vh" }}>
      {friendRequest && friendRequest.length > 0 ? (
        friendRequest.map((each) => (
          <div className="connection-profile" key={each.id}>
            <img
              src={`http://localhost:7101/images/${each.profileImage}`}
              className="friendList-profile-image"
              alt=""
            />
            <p className="connection-profile-username">{each.userName}</p>
            <Button
              label="Accept"
              className="connection-follow-button"
              onClick={() => handleAcceptFriendRequest(each.id)}
            />
          </div>
        ))
      ) : (
        <p className="noFriendRequestMessage">No friend requests available.</p>
      )}
    </div>
  );
};

export default Connection;
