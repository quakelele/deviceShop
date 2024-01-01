import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDevice = createAsyncThunk(
  "device/fetchDevice",
  async (filter) => {
    const filterCategory = filter.category ? `category=${filter.category}` : ''
    const response = await fetch(`http://localhost:3005/device?${filterCategory}`);
    const device = await response.json();
    return device;
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
    product: [],
    device: [],
    error: null,
    loading: false,
    filter: {
      category: "",
      sortPrice: { from: 0, to: 0 },
    },
  },
  reducers: {
    changeCategory(state, action) {
      state.filter = { ...state.filter, category: action.payload };

    },

    sortPriceFrom(state, action) {
      state.filter = { ...state.filter, sortPrice: { ...state.filter.sortPrice, from: action.payload } }; console.log(state.filter)
    },

    sortPriceTo(state, action) {
      state.filter = { ...state.filter, sortPrice: { ...state.filter.sortPrice, to: action.payload } }; console.log(state.filter)
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

export const { sortPriceTo, changeCategory, sortPriceFrom } = deviceSlice.actions;
export default deviceSlice.reducer;
