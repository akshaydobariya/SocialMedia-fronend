const { createSlice } = require("@reduxjs/toolkit");
const {
  Register_Api,
  login_Api,
  GetAllUser,
  SendFriendRequest,
  FriendRequest,
  AcceptFriendRequest,
} = require("../../ApiCalling/Account");

const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState: {
    isLoading: false,
    isError: false,
    registerData: null,
    loginData: null,
    forgotData: null,
    errorMessage: "",
    allUser: [],
    friendRequest: null,
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
    clearRegisterData: (state) => {
      state.registerData = null;
    },
    clearLoginData: (state) => {
      state.loginData = null;
    },
    logout: (state) => {
      state.loginData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Register_Api.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(Register_Api.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerData = action.payload;
        state.isError = false;
      })
      .addCase(Register_Api.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
    builder
      .addCase(login_Api.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login_Api.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginData = action.payload;
        state.isError = false;
      })
      .addCase(login_Api.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(GetAllUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(GetAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allUser = action.payload;
        state.isError = false;
      })
      .addCase(GetAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(SendFriendRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(SendFriendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(SendFriendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(FriendRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(FriendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friendRequest = action.payload;
        state.isError = false;
      })
      .addCase(FriendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(AcceptFriendRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(AcceptFriendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(AcceptFriendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});
export const { clearErrorMessage, clearRegisterData, logout } =
  AccountSlice.actions;
export default AccountSlice.reducer;
