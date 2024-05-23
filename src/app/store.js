import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/imagesApi/imagesSlice";
import { ImagesFavSlice } from "../features/imagesFav/imagesFavSlice";
import { searchImgSlice } from "../features/searchImg/searchImgSlice";

export const store = configureStore({
  reducer: {
    image: ImagesSlice.reducer,
    imagesFav: ImagesFavSlice.reducer,
    search: searchImgSlice.reducer,
  },
});
