import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   fetchLoggedInUserOrders,
//   updateUser,
//   fetchLoggedInUser,
// } from "./userAPI";
const initialState = {
  status: "idle",
  userInfo: null,
};
import {fetchLoggedInUser} from "./authAPI"

// export const fetchLoggedInUserOrderAsync = createAsyncThunk(
//   "user/fetchLoggedInOrders",
//   async () => {
//     const response = await fetchLoggedInUserOrders();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
export const fetchLoggedInUserAsync = createAsyncThunk(
  "auth/fetchLoggedInUser",
  async () => {
    const response = await fetchLoggedInUser();
    console.log("this is response from user",response)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const updateUserAsync = createAsyncThunk(
//   "user/updateUser",
//   async (update) => {
//     const response = await updateUser(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
    //     state.status = "idle";
    //     // this info can be different or more from logged-in User info
    //     state.userInfo.orders = action.payload;
    //   })
    //   .addCase(updateUserAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(updateUserAsync.fulfilled, (state, action) => {
    //     state.status = "idle";
    //     state.userInfo = action.payload;
    //   })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // this info can be different or more from logged-in User info
        state.userInfo = action.payload;
      });
  },
});

// export const selectUserOrders = (state) => state.user.userInfo.orders;
export const selectUserInfo = (state) => state.auth.userInfo;
export const selectUserInfoStatus = (state) => state.auth.status;

export default userSlice.reducer;