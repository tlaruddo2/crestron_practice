import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 50,
};

export const volumeSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    changeByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, changeByAmount } = volumeSlice.actions;

export default volumeSlice.reducer;
