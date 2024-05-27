import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchImgThunk } from "../../features/imagesApi/imagesThunk";

export const searchImgSlice = createSlice({
  name: "searchImg",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchImgThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchSearchImgThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchSearchImgThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});
