import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 0 },
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase("count/userInputCount", (state, action) => {
      state.amount++;
    });
    builder.addCase("count/decrementCount", (state, action) => {
      state.amount--;
    });
  },
});

export default amountSlice.reducer;
