// Users slice with asynchronous request handling
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
   "users/fetchUsers",
   async (thunkAPI) => {
      return await axios
         .get(`https://jsonplaceholder.typicode.com/users`)
         .then((respone) => {
            return respone.data;
         })
         .catch((error) => {
            // return error.message;
            const message =
               (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
               error.message ||
               error.toString();
            return thunkAPI.rejectWithValue(message);
         });
   }
);

const UsersSlice = createSlice({
   name: "users",
   initialState: {
      loading: false,
      usersInfo: [],
      error: "",
   },
   reducers: {
      // standard reducer logic, with auto-generated action types per reducer
   },
   extraReducers: {
      [fetchUsers.pending]: (state) => {
         state.loading = true;
      },
      [fetchUsers.fulfilled]: (state, { payload }) => {
         state.loading = false;
         state.usersInfo = payload;
         state.error = "";
      },
      [fetchUsers.rejected]: (state, { error }) => {
         state.loading = false;
         state.usersInfo = [];
         state.error = error.message;
      },
   },
});

export default UsersSlice.reducer;
