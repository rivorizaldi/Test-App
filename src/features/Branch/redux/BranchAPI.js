import { createAsyncThunk } from "@reduxjs/toolkit";
import BranchService from "../../../services/Branch/BranchService";

export const getAllBranch = createAsyncThunk(
  "branch/getAll",
  async (_, { rejecWithValue }) => {
    try {
      const response = await BranchService.getAll();
      return response.data;
    } catch (error) {
      return rejecWithValue(error.response.data);
    }
  }
);
