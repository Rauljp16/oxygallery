import { createSlice } from "@reduxjs/toolkit";

export const searchImgSlice = createSlice({
  name: "searchImg",
  initialState: {
    searchImgValue: "",
  },
  reducers: {
    addSearch: (state, action) => {
      state.searchImgValue = action.payload;
    },
  },
});
export const { addSearch } = searchImgSlice.actions;
