import { createSlice } from "@reduxjs/toolkit";
import { getAllBranch } from "./BranchAPI";

const initialState = {
  data: [],
  loading: false,
};

export const BranchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBranch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllBranch.rejected, (state) => {
        state.loading = false;
        state.data = [];
      });
  },
});

export default BranchSlice.reducer;
