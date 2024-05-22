import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImagesThunk = createAsyncThunk(
  "images/fetchImages",
  async () => {
    try {
      const request = await fetch(
        "https://api.unsplash.com/photos/?client_id=XUBEXwPvxdsawwBpkrcAKse24qbJ_Uhew2eTetc3OWo#"
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
