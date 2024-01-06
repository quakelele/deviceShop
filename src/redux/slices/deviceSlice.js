import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const putComment = createAsyncThunk(
  "resource/put",
  async (obj, { dispatch, getState }) => {
    const { inputValues } = getState().device;

    const response = await fetch(`http://localhost:3005/device/${obj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...obj,
        comments: inputValues,
      }),
    });
    console.log("obj", obj);
    if (response.ok) {
      dispatch(fetchDevice());
    }
  }
);

export const fetchDevice = createAsyncThunk(
  "device/fetchDevice",
  async (_, { getState }) => {
    const { filter } = getState().device;
    const priceSortOrder = filter?.order
      ? `&_sort=price&_order=${filter.order}`
      : "";
    const filterCategory = filter?.category
      ? `category=${filter.category}`
      : "";
    const priceFrom = filter?.sortPrice.from
      ? `&price_gte=${filter.sortPrice.from}`
      : "";
    const priceTo = filter?.sortPrice.to
      ? `&price_lte=${filter.sortPrice.to}`
      : "";

    const response = await fetch(
      `http://localhost:3005/device?${filterCategory}${priceFrom}${priceTo}${priceSortOrder}`
    );

    const deviced = await response.json();
    return deviced;
  }
);

export const fetchDeviceId = createAsyncThunk(
  "cart/fetchDeviceDevice",
  async (id) => {
    const response = await fetch(`http://localhost:3005/device/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }
);

export const deviceSlice = createSlice({
  name: "device",
  initialState: {
    inputValues: [],
    product: [],
    device: [],
    error: null,
    lowNhigh: "",
    loading: false,
    filter: {
      order: "",
      category: "",
      sortPrice: { from: 0, to: 0 },
    },
  },
  reducers: {
    setInputz(state, action) {
      state.inputValues = [
        ...state.inputValues,
        { value: action.payload, id: Math.random() },
      ];
    },

    setOrder(state, action) {
      state.filter = { ...state.filter, order: action.payload };
    },
    toLowNhigh(state, action) {
      state.lowNhigh = action.payload;
    },

    changeCategory(state, action) {
      state.filter = { ...state.filter, category: action.payload };
    },

    resetCategory(state) {
      if (state.filter.category) {
        state.filter = { ...state.filter, category: "" };
      }
    },
    sortPriceFrom(state, action) {
      state.filter = {
        ...state.filter,
        sortPrice: { ...state.filter.sortPrice, from: action.payload },
      };
    },

    sortPriceTo(state, action) {
      state.filter = {
        ...state.filter,
        sortPrice: { ...state.filter.sortPrice, to: action.payload },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDevice.fulfilled, (state, action) => {
      state.loading = false;
      state.device = action.payload;
    });
    builder.addCase(fetchDevice.rejected, (state) => {
      state.error = "eto 3.14zdec";
    });

    builder.addCase(fetchDeviceId.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const {
  sortPriceTo,
  setInputz,
  productCommentAdd,
  setOrder,
  toLowNhigh,
  resetCategory,
  changeCategory,
  sortPriceFrom,
} = deviceSlice.actions;
export default deviceSlice.reducer;
