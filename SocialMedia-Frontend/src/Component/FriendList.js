// FriendList.js
import React, { useState, useEffect } from "react";
import "./FriendList.css";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser, SendFriendRequest } from "../ApiCalling/Account";
import Button from "../common/Button"; // Import the Button component

const FriendList = () => {
  const dispatch = useDispatch();
  const { allUser, loginData } = useSelector((state) => state.account);

  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (loginData) dispatch(GetAllUser(loginData.id));
  }, [loginData]);

  // Function to filter users based on the search term and city
  const filteredUsers = allUser.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="friendList">
      {/* Search input */}
      <input
        type="text"
        className="SearchCity"
        placeholder="Search by username or city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display filtered users */}
      {filteredUsers.map((each) => (
        <div key={each.id} className="friendList-profile">
          <img
            src={`http://localhost:7101/images/${each.profileImage}`}
            className="friendList-profile-image"
            alt=""
          />

          <p className="friendList-profile-username">{each.userName}</p>

          <Button
            label="Follow"
            className="follow-button"
            onClick={async () => {
              const data = {
                userId: loginData.id,
                senderId: each.id,
              };
              await dispatch(SendFriendRequest(data));
              await dispatch(GetAllUser(loginData.id));
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FriendList;
