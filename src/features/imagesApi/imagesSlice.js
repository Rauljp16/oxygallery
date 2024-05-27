import { createSlice } from "@reduxjs/toolkit";
import { fetchImagesThunk } from "./imagesThunk";

export const ImagesSlice = createSlice({
  name: "image",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchImagesThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchImagesThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});
