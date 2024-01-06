import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await fetch("http://localhost:3005/cart");
  const result = await response.json();
  return result;
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (obj, { dispatch, getState }) => {
    const { cart } = getState().cart;
    if (cart.map((i) => i.id).includes(obj.id)) {
      dispatch(deleteFromCartBack(obj.id));
      return;
    }
    dispatch(addToCartLocal(obj));

    const arrFootage = {
      title: obj.title,
      quantity: obj.quantity,
      price: obj.price,
      category: obj.category,
      imageUrl: obj.imageUrl,
      rating: obj.rating,
      id: obj.id,
    };
    fetch("http://localhost:3005/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arrFootage),
    });
  }
);

export const plusQuantity = createAsyncThunk(
  "resource/put",
  async (obj, { dispatch }) => {
    if (obj.quantity >= 5) {
      return obj;
    }
    const response = await fetch(`http://localhost:3005/cart/${obj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...obj,
        quantity: obj.quantity + 1,
      }),
    });

    if (response.ok) {
      dispatch(fetchCart());
    }
  }
);

export const minusQuantity = createAsyncThunk(
  "resource/put",
  async (obj, { dispatch }) => {
    if (obj.quantity <= 1) {
      return obj;
    }
    const response = await fetch(`http://localhost:3005/cart/${obj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...obj,
        quantity: obj.quantity - 1,
      }),
    });

    if (response.ok) {
      dispatch(fetchCart());
    }
  }
);

export const deleteFromCartBack = createAsyncThunk(
  "cart/deleteFromCartBack",
  async (id, { dispatch }) => {
    fetch(`http://localhost:3005/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    dispatch(deleteFromCart(id));
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cart: [],
    device: [],
    error: null,
    loading: false,
  },
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = !action.payload;
    },
    addToCartLocal(state, { payload: obj }) {
      if (!state.cart.some((i) => i.title === obj.title)) {
        state.cart.push(obj);
      }
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    cartClear(state) {
      state.cart = [];
    },
    cartHandler(state, action) {
      if (state.cart.map((item) => item.id).includes(action.payload.id)) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        return;
      }
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.error = "error";
    });
  },
});
export const { cartClear, setIsOpen, addToCartLocal, deleteFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
