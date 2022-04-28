import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/Auth/AuthService";

export const userLogin = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
