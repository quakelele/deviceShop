import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";
import deviceReducer from "./slices/deviceSlice";
import commentReducer from "./slices/commentSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    device: deviceReducer,
    comment: commentReducer,
  },
});
