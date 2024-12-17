// features/exampleSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create } from "../../services";

export const HotelDetailsAPI = createAsyncThunk("hotel-api", async (data) => {
  const res = await create(
    "v1/api/akshara/open/ai/generate/",
    data,
    "auth-json"
  );
  return res?.data;
});

const HotelSlice = createSlice({
  name: "hotel",
  initialState: {
    loading: false,
    results: null,
  },
  extraReducers: (builder) => {
    //    HotelDetailsAPI
    builder.addCase(HotelDetailsAPI.pending, (state, action) => {
      state.loading = true;
      state.results = null;
    });
    builder.addCase(HotelDetailsAPI.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = false;
    });
    builder.addCase(HotelDetailsAPI.rejected, (state, action) => {
      state.loading = false;
      state.results = null;
    });
  },
  reducers: {
    setResultsData(state, action) {
      state.results = action.payload;
    },
  },
});

export const { setResultsData } = HotelSlice.actions;

export default HotelSlice.reducer;
