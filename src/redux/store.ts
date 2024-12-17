// store.js
import { configureStore } from "@reduxjs/toolkit";
import { HotelSlice } from "./slices";

export const store = configureStore({
  reducer: {
    hotelSlice: HotelSlice,
  },
});

export default store;
