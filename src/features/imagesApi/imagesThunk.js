import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const fetchImagesThunk = createAsyncThunk(
  "images/fetchImages",
  async () => {
    try {
      const request = await fetch(
        "https://api.unsplash.com/photos/random?count=20&client_id=XUBEXwPvxdsawwBpkrcAKse24qbJ_Uhew2eTetc3OWo#"
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

  async () => {
    const search = useSelector((state) => state.search.searchImgValue);
    try {
      const request = await fetch(
        `https://api.unsplash.com/search/photos/?per_page=20&query=${search}&client_id=XUBEXwPvxdsawwBpkrcAKse24qbJ_Uhew2eTetc3OWo#`
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
