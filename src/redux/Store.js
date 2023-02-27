import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./feature/home/homeSlice";
import CartReducer from "./feature/cart/cartSlice";

export const Store = configureStore({
  reducer: {
    home: HomeReducer,
    cart: CartReducer,
  },
});
