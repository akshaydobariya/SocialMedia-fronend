import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../Constant";

export const CreatePost = createAsyncThunk("CreatePost", async (data) => {
  try {
    console.log(data);

    const response = await axios.post(`${API_BASE_URL}Post/CreatePost`, data);
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
        // Handle other errors here if needed
        throw new Error("An error occurred while creating the post.");
      }
    } else {
      // Handle network or other errors
      throw new Error("Network error or an unexpected error occurred.");
    }
  }
});

export const getAllPost = createAsyncThunk("GetAllPost", async (id) => {
  try {
    console.log(id);
    const response = await axios.get(`${API_BASE_URL}Post/all?id=${id}`);
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
          throw new Error("An error occurred while fetching the posts.");
        }
      }
    } else {
      // Handle network or other errors
      throw new Error("Network error or an unexpected error occurred.");
    }
  }
});

export const LikePost = createAsyncThunk(
  "LikePost",
  async ({ PostId, UserId }) => {
    console.log(PostId);
    try {
      const response = await axios.post(
        `${API_BASE_URL}Post/like/${PostId}/${UserId}`
      );
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
            throw new Error("An error occurred while fetching the posts.");
          }
        }
      } else {
        // Handle network or other errors
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);

export const UnLikePost = createAsyncThunk(
  "UnLikePost",
  async ({ PostId, UserId }) => {
    console.log(PostId);
    try {
      const response = await axios.post(
        `${API_BASE_URL}Post/unlike/${PostId}/${UserId}`
      );
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
            throw new Error("An error occurred while fetching the posts.");
          }
        }
      } else {
        // Handle network or other errors
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);

export const CreateComment = createAsyncThunk("CreateComment", async (data) => {
  console.log("done", data);
  try {
    const response = await axios.post(
      `${API_BASE_URL}Post/CreateComment`,
      data
    );
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
          throw new Error("An error occurred while fetching the posts.");
        }
      }
    } else {
      // Handle network or other errors
      throw new Error("Network error or an unexpected error occurred.");
    }
  }
});

export const GetCommnet = createAsyncThunk("GetCommnet", async (PostId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}Post/comments/${PostId}`);
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
          throw new Error("An error occurred while fetching the posts.");
        }
      }
    } else {
      // Handle network or other errors
      throw new Error("Network error or an unexpected error occurred.");
    }
  }
});

export const PostCount = createAsyncThunk("PostCount", async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}User/UserPosts?UserId=${userId}`
    );
    return response.data; // Assuming you want to return the data from the response
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

export const PostCountImage = createAsyncThunk(
  "PostCountImage",
  async (userId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}User/UserPostImage?UserId=${userId}`
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
            throw new Error("An error occurred while fetching the postCounts.");
          }
        }
      } else {
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);

export const FollowerCount = createAsyncThunk(
  "FollowerCount",
  async (userId) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}User/FollowerCount?Id=${userId}`
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
              "An error occurred while fetching the FollowerCounts."
            );
          }
        }
      } else {
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);

export const FollowingCount = createAsyncThunk(
  "FollowingCount",
  async (userId) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}User/FollowingCount?Id=${userId}`
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
              "An error occurred while fetching the FollowerCounts."
            );
          }
        }
      } else {
        throw new Error("Network error or an unexpected error occurred.");
      }
    }
  }
);
