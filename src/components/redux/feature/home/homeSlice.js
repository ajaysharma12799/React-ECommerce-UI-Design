import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  products: [],
};

export const asyncFetchProducts = createAsyncThunk(
  "home/fetchProducts",
  async () => {
    try {
      const responseObj = await fetch("https://fakestoreapi.com/products");
      const products = await responseObj.json();
      return products;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(asyncFetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default homeSlice.reducer;
