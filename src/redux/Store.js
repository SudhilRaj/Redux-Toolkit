import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import UsersReducer from "./UsersSlice";

const store = configureStore({
   reducer: { counter: CounterReducer, users: UsersReducer },
});

export default store;
