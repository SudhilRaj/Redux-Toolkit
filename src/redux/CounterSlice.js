import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
   name: "counter",
   initialState: {
      count: 0,
   },
   reducers: {
      incrementCounter: (state) => {
         // Redux Toolkit allows us to write "mutating" logic in reducers. It
         // doesn't actually mutate the state because it uses the Immer library,
         // which detects changes to a "draft state" and produces a brand new
         // immutable state based off those changes
         state.count += 1;
      },
      decrementCounter: (state) => {
         state.count -= 1;
      },
      increment10Counter: (state) => {
         state.count += 10;
      },
      incrementValueCounter: (state, { payload }) => {
         state.count += payload;
      },
   },
});

export const {
   incrementCounter,
   decrementCounter,
   increment10Counter,
   incrementValueCounter,
} = CounterSlice.actions;
export default CounterSlice.reducer;
