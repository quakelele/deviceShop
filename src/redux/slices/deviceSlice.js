import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDevice = createAsyncThunk("device/fetchDevice", async (category) => {
  const response = await fetch(`http://localhost:3005/device?${category}`);
  const device = await response.json();
  return device;
});

export const fetchDeviceId = createAsyncThunk(
  "cart/fetchDeviceDevice",
  async (id, { dispatch }) => {
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
    filter: { category: "" },
  },
  reducers: {
    changeCategory(state, action) {
      state.filter = { ...state.filter, category: action.payload };
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

export const { changeCategory } = deviceSlice.actions;
export default deviceSlice.reducer;
