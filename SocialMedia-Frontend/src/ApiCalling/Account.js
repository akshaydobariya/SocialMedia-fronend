import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../Constant";

export const Register_Api = createAsyncThunk("user/register", async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}User/register`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // Check if the response status is 400 (Bad Request)
      if (error.response.status === 400) {
        // Return an error action with the "Bad Request" message
        throw new Error("User already registered");
      } else {
        // Handle other errors here if needed
        throw new Error(`Error registering admin: ${error.response.status}`);
      }
    } else {
      // Handle network or other errors
      throw new Error("Registration failed: Network error");
    }
  }
});

export const login_Api = createAsyncThunk("login/account", async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}User/login`, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Check if the response status is 400 (Bad Request)
      if (error.response.status === 400) {
        // Return an error action with the "Bad Request" message
        throw new Error(error.response.data);
      } else {
        // Handle other errors here if needed
        throw new Error(`Error registering admin: ${error.response.status}`);
      }
    } else {
      // Handle network or other errors
      throw new Error("Registration failed: Network error");
    }
  }
});

export const GetAllUser = createAsyncThunk("GetAllUser", async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}User/getAllUser?id=${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        // Handle the specific 404 error
        throw new Error("Resource not found on the server.");
      } else if (error.response.status === 400) {
        // Handle the specific 400 error
        throw new Error("Bad request: " + error.response.data);
      } else {
        if (error.response.data && error.response.data.errorMessage) {
          throw new Error(error.response.data.errorMessage);
        } else {
          throw new Error("An error occurred while fetching the user.");
        }
      }
    } else {
      // Handle network or other errors
      throw new Error("Network error or an unexpected error occurred.");
    }
  }
});

export const SendFriendRequest = createAsyncThunk(
  "SendFriendRequest",
  async ({ userId, senderId }) => {
    console.log(userId, senderId);
    try {
      const response = await axios.post(
        `${API_BASE_URL}User/send-friend-request`,
        {
          receiverUserId: userId,
          SenderUserId: senderId,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw new Error("Resource not found on the server.");
        } else if (error.response.status === 400) {
          throw new Error("Bad request: " + error.response.data);
        } else {
          if (error.response.data && error.response.data.errorMessage) {
            throw new Error(error.response.data.errorMessage);
          } else {
            throw new Error(
              "An error occurred while fetching the api Calling."
            );
          }
        }
      } else {
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);

export const FriendRequest = createAsyncThunk("FriendRequest", async (Id) => {
  try {
    const response = await axios.post(`${API_BASE_URL}User/All-Send-Request`, {
      Id,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error("Resource not found on the server.");
      } else if (error.response.status === 400) {
        throw new Error("Bad request: " + error.response.data);
      } else {
        if (error.response.data && error.response.data.errorMessage) {
          throw new Error(error.response.data.errorMessage);
        } else {
          throw new Error("An error occurred while fetching the postCounts.");
        }
      }
    } else {
      throw new Error("Network error or an unexpected error occurred.");
    }
  }
});

export const AcceptFriendRequest = createAsyncThunk(
  "AcceptFriendRequest",
  async ({ userId, senderId }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}User/accept-friend-request`,
        {
          receiverUserId: userId,
          SenderUserId: senderId,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw new Error("Resource not found on the server.");
        } else if (error.response.status === 400) {
          throw new Error("Bad request: " + error.response.data);
        } else {
          if (error.response.data && error.response.data.errorMessage) {
            throw new Error(error.response.data.errorMessage);
          } else {
            throw new Error(
              "An error occurred while fetching the api Calling."
            );
          }
        }
      } else {
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);
