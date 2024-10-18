import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    incrementCount: (state, action) => {
      state.count++;
    },
    decrementCount: (state, action) => {
      state.count--;
    },
    multiplyCount: (state, action) => {
      state.count = state.count * 5;
    },
    resetCount: (state, action) => {
      state.count = 0;
    },
    userInputCount: (state, action) => {
      state.count += +action?.payload;
    },
  },
});

export default counterSlice.reducer;
export const {
  incrementCount,
  decrementCount,
  multiplyCount,
  resetCount,
  userInputCount,
} = counterSlice.actions;
