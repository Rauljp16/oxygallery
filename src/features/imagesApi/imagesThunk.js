import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImagesThunk = createAsyncThunk(
  "images/fetchImages",
  async () => {
    try {
      const request = await fetch(
        "https://api.unsplash.com/photos/random?count=30&client_id=XUBEXwPvxdsawwBpkrcAKse24qbJ_Uhew2eTetc3OWo#"
      );
      if (request.ok) {
        const data = await request.json();
        return data;
      }
      return null;
    } catch (Error) {
      return null;
    }
  }
);

export const fetchSearchImgThunk = createAsyncThunk(
  "searchImages/fetchSearchImages",
  async (inputValue) => {
    try {
      const request = await fetch(
        `https://api.unsplash.com/search/photos/?per_page=30&query=${inputValue}&client_id=XUBEXwPvxdsawwBpkrcAKse24qbJ_Uhew2eTetc3OWo#`
      );
      if (request.ok) {
        const data = await request.json();
        return data.results;
      }
      return null;
    } catch (Error) {
      return null;
    }
  }
);
