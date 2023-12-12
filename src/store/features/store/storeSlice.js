import { createSlice } from "@reduxjs/toolkit";
import { getStore } from "../../../services/store.service";

const initialState = {
  storeStatus: "idle",
  storeError: null,
  storeData: null,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStore.pending, (state) => {
        state.storeStatus = "loading";
      })
      .addCase(getStore.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.storeStatus = "succeeded";
        state.storeData = data;
      })
      .addCase(getStore.rejected, (state, action) => {
        state.storeStatus = "failed";
        state.storeError = action.error.message;
      });
  },
});

export default storeSlice.reducer;
