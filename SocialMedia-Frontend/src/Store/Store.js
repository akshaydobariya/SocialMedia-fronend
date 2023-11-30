import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./Slice/AccountSlice";
import PostSlice from "./Slice/PostSlice";

export const Store = configureStore({
  reducer: {
    account: AccountSlice,
    post: PostSlice,
  },
});
