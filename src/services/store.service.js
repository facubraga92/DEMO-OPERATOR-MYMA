import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./utils";

export const getStore = createAsyncThunk("store/getStore", async (args) => {
  const { storeId } = args;
  const { data } = await Axios.get(BASE_URL + `/Stores/${storeId}`);

  return data;
});
