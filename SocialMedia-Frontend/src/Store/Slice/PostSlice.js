// postSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  CreateComment,
  CreatePost,
  GetCommnet,
  LikePost,
  UnLikePost,
  getAllPost,
  PostCount,
  PostCountImage,
  FollowerCount,
  FollowingCount,
} from "../../ApiCalling/Post";

const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    postData: null,
    allPost: null,
    commentData: null,
    postCount: 0,
    userPostImage: null,
    followerCount: 0,
    followingCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreatePost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(CreatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(CreatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getAllPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allPost = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getAllPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(LikePost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(LikePost.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(LikePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(UnLikePost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(UnLikePost.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(UnLikePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(CreateComment.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(CreateComment.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(CreateComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(GetCommnet.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(GetCommnet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentData = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(GetCommnet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(PostCount.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(PostCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postCount = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(PostCount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(PostCountImage.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(PostCountImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userPostImage = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(PostCountImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(FollowerCount.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(FollowerCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.followerCount = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(FollowerCount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(FollowingCount.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(FollowingCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.followingCount = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(FollowingCount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default postSlice.reducer;
