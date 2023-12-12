import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./utils";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (args) => {
    const { storeId } = args;
    const { data } = await Axios.get(BASE_URL + `/Products?StoreId=${storeId}`);

    return data;
  }
);

export const getProductsPromo = createAsyncThunk(
  "product/getProductsPromo",
  async (args) => {
    const { storeId } = args;

    const { data } = await Axios.get(
      BASE_URL + `/Products/Promos?StoreId=${storeId}`
    );

    return data;
  }
);
