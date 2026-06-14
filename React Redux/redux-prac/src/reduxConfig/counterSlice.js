import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 20,
  },

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },

    decrement: (state) => {
      if (state.count >= 1) {
        state.count = state.count - 1;
      }
    },

    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;