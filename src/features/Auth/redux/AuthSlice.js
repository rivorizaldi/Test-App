import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./AuthAPI";

const initialState = {
  user: {},
  token: "",
  loading: false,
  isAuthorize: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unauthorize: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.message = "";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthorize = true;
        state.token = action.payload.token;
        state.message = "";
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.message = !!action.payload?.errors && action.payload?.errors[0];
      });
  },
});

export const { unauthorize } = authSlice.actions;

export default authSlice.reducer;
